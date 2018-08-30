import { ElementRef, OnChanges, SimpleChanges, OnDestroy, EventEmitter } from '@angular/core';
import { NgHammerConfig } from './model';
export declare class HammerDirective implements OnChanges, OnDestroy {
    private el;
    ngHammer: NgHammerConfig;
    eventTriggered: EventEmitter<{}>;
    elementInstance: any;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    createHammerManager(): void;
    createHammerRecognizer(): void;
    private trigger(e);
    private capitalize(str);
    private guardDirections(direction);
}
