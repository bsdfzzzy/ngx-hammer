import Hammer from 'hammerjs';
import { Directive, Input, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var gestures = ['tap', 'pan', 'pinch', 'press', 'rotate', 'swipe'];
/** @type {?} */
var directions = [
    'up',
    'down',
    'left',
    'right',
    'horizontal',
    'vertical',
    'all'
];
var HammerDirective = /** @class */ (function () {
    function HammerDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    HammerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes["ngHammer"] && changes["ngHammer"].currentValue) {
            this.createHammerManager();
            this.createHammerRecognizer();
        }
    };
    /**
     * @return {?}
     */
    HammerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mc = this.elementInstance.hammer;
        if (mc.handler) {
            mc.hammer.off(this.ngHammer.event, mc.handler);
        }
        if (!Object.keys(mc.handlers).length) {
            mc.destroy();
            mc = null;
        }
    };
    /**
     * @return {?}
     */
    HammerDirective.prototype.createHammerManager = /**
     * @return {?}
     */
    function () {
        this.elementInstance = this.el.nativeElement;
        if (!this.elementInstance.hammer) {
            this.elementInstance.hammer = new Hammer.Manager(this.elementInstance);
        }
    };
    /**
     * @return {?}
     */
    HammerDirective.prototype.createHammerRecognizer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mc = this.elementInstance.hammer;
        /** @type {?} */
        var event = this.ngHammer.event;
        if (!event) {
            console.warn('[ngx-hammer] event type argument is required.');
            return;
        }
        /** @type {?} */
        var recognizer;
        /** @type {?} */
        var recognizerType;
        recognizerType = gestures.find(function (gesture) { return gesture === event; });
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
    };
    /**
     * @param {?} str
     * @return {?}
     */
    HammerDirective.prototype.capitalize = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    HammerDirective.prototype.guardDirections = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (typeof direction === 'string') {
            /** @type {?} */
            var hammerDirection = 'DIRECTION_' + direction.toUpperCase();
            if (directions.indexOf(direction) > -1 &&
                Hammer.hasOwnProperty(hammerDirection)) {
                return Hammer[hammerDirection];
            }
            else {
                console.warn('[ngx-hammer] invalid direction: ' + direction);
            }
        }
    };
    HammerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngHammer]'
                },] }
    ];
    /** @nocollapse */
    HammerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HammerDirective.propDecorators = {
        ngHammer: [{ type: Input }]
    };
    return HammerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HammerModule = /** @class */ (function () {
    function HammerModule() {
    }
    HammerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [HammerDirective],
                    exports: [HammerDirective]
                },] }
    ];
    return HammerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HammerModule, HammerDirective };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWhhbW1lci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWhhbW1lci9saWIvaGFtbWVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWhhbW1lci9saWIvaGFtbWVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdIYW1tZXJDb25maWcgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgZ2VzdHVyZXMgPSBbJ3RhcCcsICdwYW4nLCAncGluY2gnLCAncHJlc3MnLCAncm90YXRlJywgJ3N3aXBlJ107XG5jb25zdCBkaXJlY3Rpb25zID0gW1xuICAndXAnLFxuICAnZG93bicsXG4gICdsZWZ0JyxcbiAgJ3JpZ2h0JyxcbiAgJ2hvcml6b250YWwnLFxuICAndmVydGljYWwnLFxuICAnYWxsJ1xuXTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nSGFtbWVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSGFtbWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBuZ0hhbW1lcjogTmdIYW1tZXJDb25maWc7XG5cbiAgZWxlbWVudEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5uZ0hhbW1lciAmJiBjaGFuZ2VzLm5nSGFtbWVyLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5jcmVhdGVIYW1tZXJNYW5hZ2VyKCk7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsZXQgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcbiAgICBpZiAobWMuaGFuZGxlcikge1xuICAgICAgbWMuaGFtbWVyLm9mZih0aGlzLm5nSGFtbWVyLmV2ZW50LCBtYy5oYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhtYy5oYW5kbGVycykubGVuZ3RoKSB7XG4gICAgICBtYy5kZXN0cm95KCk7XG4gICAgICBtYyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSGFtbWVyTWFuYWdlcigpIHtcbiAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcikge1xuICAgICAgdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyKHRoaXMuZWxlbWVudEluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJSZWNvZ25pemVyKCkge1xuICAgIGNvbnN0IG1jOiBIYW1tZXIgPSB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXI7XG5cbiAgICAvLyBkZXRlcm1pbmUgZXZlbnQgdHlwZVxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5uZ0hhbW1lci5ldmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBldmVudCB0eXBlIGFyZ3VtZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWNvZ25pemVyLCByZWNvZ25pemVyVHlwZTtcbiAgICByZWNvZ25pemVyVHlwZSA9IGdlc3R1cmVzLmZpbmQoZ2VzdHVyZSA9PiBnZXN0dXJlID09PSBldmVudCk7XG4gICAgaWYgKCFyZWNvZ25pemVyVHlwZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBldmVudCB0eXBlOiAnICsgZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWNvZ25pemVyID0gbWMuZ2V0KHJlY29nbml6ZXJUeXBlKTtcbiAgICBpZiAoIXJlY29nbml6ZXIpIHtcbiAgICAgIHJlY29nbml6ZXIgPSBuZXcgSGFtbWVyWyh0aGlzLmNhcGl0YWxpemUocmVjb2duaXplclR5cGUpKV0oKTtcbiAgICAgIHJlY29nbml6ZXIucmVjb2duaXplV2l0aChtYy5yZWNvZ25pemVycyk7XG4gICAgICBtYy5hZGQocmVjb2duaXplcik7XG4gICAgfVxuXG4gICAgcmVjb2duaXplci5vcHRpb25zLmRpcmVjdGlvbiA9IHRoaXMuZ3VhcmREaXJlY3Rpb25zKFxuICAgICAgdGhpcy5uZ0hhbW1lci5kaXJlY3Rpb25cbiAgICApO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5nSGFtbWVyLmhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1jLmhhbmRsZXIgPSBudWxsO1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnW25neC1oYW1tZXJdIGludmFsaWQgaGFuZGxlciBmdW5jdGlvbiBmb3Igdi1oYW1tZXI6ICcgK1xuICAgICAgICAgIHRoaXMubmdIYW1tZXIuaGFuZGxlclxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWMub24oZXZlbnQsIChtYy5oYW5kbGVyID0gdGhpcy5uZ0hhbW1lci5oYW5kbGVyKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCk7XG4gIH1cblxuICBwcml2YXRlIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBndWFyZERpcmVjdGlvbnMoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbW1lckRpcmVjdGlvbiA9ICdESVJFQ1RJT05fJyArIGRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSA+IC0xICYmXG4gICAgICAgIEhhbW1lci5oYXNPd25Qcm9wZXJ0eShoYW1tZXJEaXJlY3Rpb24pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIEhhbW1lcltoYW1tZXJEaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIYW1tZXJEaXJlY3RpdmUgfSBmcm9tICcuL2hhbW1lci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSGFtbWVyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0hhbW1lckRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSGFtbWVyTW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQVdBLElBQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFDckUsSUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsS0FBSztDQUNOLENBQUM7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