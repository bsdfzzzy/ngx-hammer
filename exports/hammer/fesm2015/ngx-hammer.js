import Hammer from 'hammerjs';
import { Directive, Input, ElementRef, NgModule } from '@angular/core';
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
        if (typeof this.ngHammer.handler !== 'function') {
            mc.handler = null;
            console.warn('[ngx-hammer] invalid handler function for v-hammer: ' +
                this.ngHammer.handler);
        }
        else {
            mc.on(event, (mc.handler = this.ngHammer.handler));
        }
        console.log();
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
    ngHammer: [{ type: Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWhhbW1lci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWhhbW1lci9saWIvaGFtbWVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWhhbW1lci9saWIvaGFtbWVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdIYW1tZXJDb25maWcgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgZ2VzdHVyZXMgPSBbJ3RhcCcsICdwYW4nLCAncGluY2gnLCAncHJlc3MnLCAncm90YXRlJywgJ3N3aXBlJ107XG5jb25zdCBkaXJlY3Rpb25zID0gW1xuICAndXAnLFxuICAnZG93bicsXG4gICdsZWZ0JyxcbiAgJ3JpZ2h0JyxcbiAgJ2hvcml6b250YWwnLFxuICAndmVydGljYWwnLFxuICAnYWxsJ1xuXTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nSGFtbWVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSGFtbWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBuZ0hhbW1lcjogTmdIYW1tZXJDb25maWc7XG5cbiAgZWxlbWVudEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5uZ0hhbW1lciAmJiBjaGFuZ2VzLm5nSGFtbWVyLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5jcmVhdGVIYW1tZXJNYW5hZ2VyKCk7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsZXQgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcbiAgICBpZiAobWMuaGFuZGxlcikge1xuICAgICAgbWMuaGFtbWVyLm9mZih0aGlzLm5nSGFtbWVyLmV2ZW50LCBtYy5oYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhtYy5oYW5kbGVycykubGVuZ3RoKSB7XG4gICAgICBtYy5kZXN0cm95KCk7XG4gICAgICBtYyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSGFtbWVyTWFuYWdlcigpIHtcbiAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcikge1xuICAgICAgdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyKHRoaXMuZWxlbWVudEluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJSZWNvZ25pemVyKCkge1xuICAgIGNvbnN0IG1jOiBIYW1tZXIgPSB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXI7XG5cbiAgICAvLyBkZXRlcm1pbmUgZXZlbnQgdHlwZVxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5uZ0hhbW1lci5ldmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBldmVudCB0eXBlIGFyZ3VtZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWNvZ25pemVyLCByZWNvZ25pemVyVHlwZTtcbiAgICByZWNvZ25pemVyVHlwZSA9IGdlc3R1cmVzLmZpbmQoZ2VzdHVyZSA9PiBnZXN0dXJlID09PSBldmVudCk7XG4gICAgaWYgKCFyZWNvZ25pemVyVHlwZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBldmVudCB0eXBlOiAnICsgZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWNvZ25pemVyID0gbWMuZ2V0KHJlY29nbml6ZXJUeXBlKTtcbiAgICBpZiAoIXJlY29nbml6ZXIpIHtcbiAgICAgIHJlY29nbml6ZXIgPSBuZXcgSGFtbWVyWyh0aGlzLmNhcGl0YWxpemUocmVjb2duaXplclR5cGUpKV0oKTtcbiAgICAgIHJlY29nbml6ZXIucmVjb2duaXplV2l0aChtYy5yZWNvZ25pemVycyk7XG4gICAgICBtYy5hZGQocmVjb2duaXplcik7XG4gICAgfVxuXG4gICAgcmVjb2duaXplci5vcHRpb25zLmRpcmVjdGlvbiA9IHRoaXMuZ3VhcmREaXJlY3Rpb25zKFxuICAgICAgdGhpcy5uZ0hhbW1lci5kaXJlY3Rpb25cbiAgICApO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5nSGFtbWVyLmhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1jLmhhbmRsZXIgPSBudWxsO1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnW25neC1oYW1tZXJdIGludmFsaWQgaGFuZGxlciBmdW5jdGlvbiBmb3Igdi1oYW1tZXI6ICcgK1xuICAgICAgICAgIHRoaXMubmdIYW1tZXIuaGFuZGxlclxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWMub24oZXZlbnQsIChtYy5oYW5kbGVyID0gdGhpcy5uZ0hhbW1lci5oYW5kbGVyKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCk7XG4gIH1cblxuICBwcml2YXRlIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBndWFyZERpcmVjdGlvbnMoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbW1lckRpcmVjdGlvbiA9ICdESVJFQ1RJT05fJyArIGRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSA+IC0xICYmXG4gICAgICAgIEhhbW1lci5oYXNPd25Qcm9wZXJ0eShoYW1tZXJEaXJlY3Rpb24pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIEhhbW1lcltoYW1tZXJEaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJEaXJlY3RpdmUgfSBmcm9tICcuL2hhbW1lci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSGFtbWVyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0hhbW1lckRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSGFtbWVyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQVdBLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFDckUsTUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsS0FBSztDQUNOLENBQUM7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