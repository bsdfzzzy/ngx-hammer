import { ElementRef, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NgHammerConfig } from './model';
export declare class HammerDirective implements OnChanges, OnDestroy {
    private el;
    ngHammer: NgHammerConfig;
    elementInstance: any;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    createHammerManager(): void;
    createHammerRecognizer(): void;
    private capitalize(str);
    private guardDirections(direction);
}
