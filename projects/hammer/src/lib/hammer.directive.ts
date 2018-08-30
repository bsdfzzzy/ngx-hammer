import Hammer from 'hammerjs';
import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { NgHammerConfig } from './model';

const gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'];
const directions = [
  'up',
  'down',
  'left',
  'right',
  'horizontal',
  'vertical',
  'all'
];

@Directive({
  selector: '[ngHammer]'
})
export class HammerDirective implements OnChanges, OnDestroy {
  @Input()
  ngHammer: NgHammerConfig;

  elementInstance: any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.ngHammer && changes.ngHammer.currentValue) {
      this.createHammerManager();
      this.createHammerRecognizer();
    }
  }

  ngOnDestroy() {
    let mc: Hammer = this.elementInstance.hammer;
    if (mc.handler) {
      mc.hammer.off(this.ngHammer.event, mc.handler);
    }
    if (!Object.keys(mc.handlers).length) {
      mc.destroy();
      mc = null;
    }
  }

  createHammerManager() {
    this.elementInstance = this.el.nativeElement;
    if (!this.elementInstance.hammer) {
      this.elementInstance.hammer = new Hammer.Manager(this.elementInstance);
    }
  }

  createHammerRecognizer() {
    const mc: Hammer = this.elementInstance.hammer;

    // determine event type
    const event = this.ngHammer.event;
    if (!event) {
      console.warn('[ngx-hammer] event type argument is required.');
      return;
    }

    let recognizer, recognizerType;
    recognizerType = gestures.find(gesture => gesture === event);
    if (!recognizerType) {
      console.warn('[ngx-hammer] invalid event type: ' + event);
      return;
    }
    recognizer = mc.get(recognizerType);
    if (!recognizer) {
      recognizer = new Hammer[(this.capitalize(recognizerType))]();
      recognizer.recognizeWith(mc.recognizers);
      mc.add(recognizer);
    }

    recognizer.options.direction = this.guardDirections(
      this.ngHammer.direction
    );

    if (typeof this.ngHammer.handler !== 'function') {
      mc.handler = null;
      console.warn(
        '[ngx-hammer] invalid handler function for v-hammer: ' +
          this.ngHammer.handler
      );
    } else {
      mc.on(event, (mc.handler = this.ngHammer.handler));
    }
    console.log();
  }

  private capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private guardDirections(direction: string) {
    if (typeof direction === 'string') {
      const hammerDirection = 'DIRECTION_' + direction.toUpperCase();
      if (
        directions.indexOf(direction) > -1 &&
        Hammer.hasOwnProperty(hammerDirection)
      ) {
        return Hammer[hammerDirection];
      } else {
        console.warn('[ngx-hammer] invalid direction: ' + direction);
      }
    }
  }
}
