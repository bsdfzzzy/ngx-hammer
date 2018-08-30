import Hammer from 'hammerjs';
import { Directive, Input, ElementRef, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'];
/** @type {?} */
const directions = [
    'up',
    'down',
    'left',
    'right',
    'horizontal',
    'vertical',
    'all'
];
class HammerDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.eventTriggered = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes["ngHammer"] && changes["ngHammer"].currentValue) {
            this.createHammerManager();
            this.createHammerRecognizer();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        let mc = this.elementInstance.hammer;
        if (mc.handler) {
            mc.hammer.off(this.ngHammer.event, mc.handler);
        }
        if (!Object.keys(mc.handlers).length) {
            mc.destroy();
            mc = null;
        }
    }
    /**
     * @return {?}
     */
    createHammerManager() {
        this.elementInstance = this.el.nativeElement;
        if (!this.elementInstance.hammer) {
            this.elementInstance.hammer = new Hammer.Manager(this.elementInstance);
        }
    }
    /**
     * @return {?}
     */
    createHammerRecognizer() {
        /** @type {?} */
        const mc = this.elementInstance.hammer;
        /** @type {?} */
        const event = this.ngHammer.event;
        if (!event) {
            console.warn('[ngx-hammer] event type argument is required.');
            return;
        }
        /** @type {?} */
        let recognizer;
        /** @type {?} */
        let recognizerType;
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
        recognizer.options.direction = this.guardDirections(this.ngHammer.direction);
        mc.on(event, (mc.handler = this.trigger.bind(this)));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    trigger(e) {
        this.eventTriggered.emit(e);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    guardDirections(direction) {
        if (typeof direction === 'string') {
            /** @type {?} */
            const hammerDirection = 'DIRECTION_' + direction.toUpperCase();
            if (directions.indexOf(direction) > -1 &&
                Hammer.hasOwnProperty(hammerDirection)) {
                return Hammer[hammerDirection];
            }
            else {
                console.warn('[ngx-hammer] invalid direction: ' + direction);
            }
        }
    }
}
HammerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngHammer]'
            },] }
];
/** @nocollapse */
HammerDirective.ctorParameters = () => [
    { type: ElementRef }
];
HammerDirective.propDecorators = {
    ngHammer: [{ type: Input }],
    eventTriggered: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HammerModule {
}
HammerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [HammerDirective],
                exports: [HammerDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HammerModule, HammerDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWhhbW1lci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWhhbW1lci9saWIvaGFtbWVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWhhbW1lci9saWIvaGFtbWVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSGFtbWVyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGdlc3R1cmVzID0gWyd0YXAnLCAncGFuJywgJ3BpbmNoJywgJ3ByZXNzJywgJ3JvdGF0ZScsICdzd2lwZSddO1xuY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgJ3VwJyxcbiAgJ2Rvd24nLFxuICAnbGVmdCcsXG4gICdyaWdodCcsXG4gICdob3Jpem9udGFsJyxcbiAgJ3ZlcnRpY2FsJyxcbiAgJ2FsbCdcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0hhbW1lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgbmdIYW1tZXI6IE5nSGFtbWVyQ29uZmlnO1xuXG4gIEBPdXRwdXQoKVxuICBldmVudFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLm5nSGFtbWVyICYmIGNoYW5nZXMubmdIYW1tZXIuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lck1hbmFnZXIoKTtcbiAgICAgIHRoaXMuY3JlYXRlSGFtbWVyUmVjb2duaXplcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGxldCBtYzogSGFtbWVyID0gdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyO1xuICAgIGlmIChtYy5oYW5kbGVyKSB7XG4gICAgICBtYy5oYW1tZXIub2ZmKHRoaXMubmdIYW1tZXIuZXZlbnQsIG1jLmhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5rZXlzKG1jLmhhbmRsZXJzKS5sZW5ndGgpIHtcbiAgICAgIG1jLmRlc3Ryb3koKTtcbiAgICAgIG1jID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJNYW5hZ2VyKCkge1xuICAgIHRoaXMuZWxlbWVudEluc3RhbmNlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXIgPSBuZXcgSGFtbWVyLk1hbmFnZXIodGhpcy5lbGVtZW50SW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKSB7XG4gICAgY29uc3QgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcblxuICAgIC8vIGRldGVybWluZSBldmVudCB0eXBlXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLm5nSGFtbWVyLmV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGV2ZW50IHR5cGUgYXJndW1lbnQgaXMgcmVxdWlyZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlY29nbml6ZXIsIHJlY29nbml6ZXJUeXBlO1xuICAgIHJlY29nbml6ZXJUeXBlID0gZ2VzdHVyZXMuZmluZChnZXN0dXJlID0+IGdlc3R1cmUgPT09IGV2ZW50KTtcbiAgICBpZiAoIXJlY29nbml6ZXJUeXBlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBpbnZhbGlkIGV2ZW50IHR5cGU6ICcgKyBldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlY29nbml6ZXIgPSBtYy5nZXQocmVjb2duaXplclR5cGUpO1xuICAgIGlmICghcmVjb2duaXplcikge1xuICAgICAgcmVjb2duaXplciA9IG5ldyBIYW1tZXJbKHRoaXMuY2FwaXRhbGl6ZShyZWNvZ25pemVyVHlwZSkpXSgpO1xuICAgICAgcmVjb2duaXplci5yZWNvZ25pemVXaXRoKG1jLnJlY29nbml6ZXJzKTtcbiAgICAgIG1jLmFkZChyZWNvZ25pemVyKTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVyLm9wdGlvbnMuZGlyZWN0aW9uID0gdGhpcy5ndWFyZERpcmVjdGlvbnMoXG4gICAgICB0aGlzLm5nSGFtbWVyLmRpcmVjdGlvblxuICAgICk7XG5cbiAgICBtYy5vbihldmVudCwgKG1jLmhhbmRsZXIgPSB0aGlzLnRyaWdnZXIuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyKGUpIHtcbiAgICB0aGlzLmV2ZW50VHJpZ2dlcmVkLmVtaXQoZSk7XG4gIH1cblxuICBwcml2YXRlIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBndWFyZERpcmVjdGlvbnMoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbW1lckRpcmVjdGlvbiA9ICdESVJFQ1RJT05fJyArIGRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSA+IC0xICYmXG4gICAgICAgIEhhbW1lci5oYXNPd25Qcm9wZXJ0eShoYW1tZXJEaXJlY3Rpb24pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIEhhbW1lcltoYW1tZXJEaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJEaXJlY3RpdmUgfSBmcm9tICcuL2hhbW1lci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSGFtbWVyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0hhbW1lckRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSGFtbWVyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQWFBLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFDckUsTUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsS0FBSztDQUNOLENBQUM7QUFLRjs7OztJQVNFLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzhCQUpqQixJQUFJLFlBQVksRUFBRTtLQUlHOzs7OztJQUV0QyxXQUFXLENBQUMsT0FBc0I7UUFD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