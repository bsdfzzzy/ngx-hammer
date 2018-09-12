import Hammer from 'hammerjs';
import {
  Directive,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { NgHammerConfig } from './model';

const recognizers = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'];
const gestures = [
  'tap',
  'pan',
  'pinch',
  'press',
  'rotate',
  'swipe',
  'panstart',
  'panend'
];
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

  @Output()
  eventTriggered = new EventEmitter();

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
      this.elementInstance.hammer = new Hammer(this.elementInstance);
    }
  }

  createHammerRecognizer() {
    const mc: Hammer = this.elementInstance.hammer;

    // determine event type
    const event = this.ngHammer.event;
    if (!event || event.length === 0) {
      console.warn('[ngx-hammer] event type argument is required.');
      return;
    }

    if (typeof event === 'string') {
      this.listenToEvent(mc, event);
      mc.on(event, (mc.handler = this.trigger.bind(this)));
    } else if (event instanceof Array) {
      event.forEach(eventName => this.listenToEvent(mc, eventName));
      mc.on(event.join(' '), (mc.handler = this.trigger.bind(this)));
    }
  }

  private listenToEvent(mc: Hammer, event: string) {
    let recognizer, recognizerType, gestureType;
    gestureType = gestures.find(gesture => gesture === event);
    recognizerType = recognizers.find(recognizer_ => recognizer_ === event);
    if (!recognizerType && gestureType) {
      return;
    } else if (!recognizerType && !gestureType) {
      console.warn('[ngx-hammer] invalid event type: ' + event);
      return;
    }
    recognizer = mc.get(recognizerType);
    if (!recognizer) {
      recognizer = new Hammer[(this.capitalize(recognizerType))]();
      recognizer.recognizeWith(mc.recognizers);
      mc.add(recognizer);
    }

    recognizer.set({
      direction: this.guardDirections(this.ngHammer.direction)
    });
  }

  private trigger(e) {
    this.eventTriggered.emit(e);
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
