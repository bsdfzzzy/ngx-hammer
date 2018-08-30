/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import Hammer from 'hammerjs';
import { Directive, Input, ElementRef } from '@angular/core';
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
export { HammerDirective };
if (false) {
    /** @type {?} */
    HammerDirective.prototype.ngHammer;
    /** @type {?} */
    HammerDirective.prototype.elementInstance;
    /** @type {?} */
    HammerDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oYW1tZXIvIiwic291cmNlcyI6WyJsaWIvaGFtbWVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQzlCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFJWCxNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUNyRSxJQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJO0lBQ0osTUFBTTtJQUNOLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFVBQVU7SUFDVixLQUFLO0NBQ04sQ0FBQzs7SUFXQSx5QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7S0FBSTs7Ozs7SUFFdEMscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLFlBQVMsSUFBSSxPQUFPLGFBQVUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtLQUNGOzs7O0lBRUQscUNBQVc7OztJQUFYOztRQUNFLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsRUFBRSxDQUFDLENBQUMs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LENBQUMsQ0FBQzs7WUFDbEMsSUFBTSxlQUFlLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvRCxFQUFFLENBQUMsQ0FDRCxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQ3ZDLENBQUMsQ0FBQyxDQUFDO2dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDaEM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7OztnQkExRkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFwQkMsVUFBVTs7OzJCQXNCVCxLQUFLOzswQkExQlI7O1NBeUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdIYW1tZXJDb25maWcgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgZ2VzdHVyZXMgPSBbJ3RhcCcsICdwYW4nLCAncGluY2gnLCAncHJlc3MnLCAncm90YXRlJywgJ3N3aXBlJ107XG5jb25zdCBkaXJlY3Rpb25zID0gW1xuICAndXAnLFxuICAnZG93bicsXG4gICdsZWZ0JyxcbiAgJ3JpZ2h0JyxcbiAgJ2hvcml6b250YWwnLFxuICAndmVydGljYWwnLFxuICAnYWxsJ1xuXTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nSGFtbWVyXSdcbn0pXG5leHBvcnQgY2xhc3MgSGFtbWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBuZ0hhbW1lcjogTmdIYW1tZXJDb25maWc7XG5cbiAgZWxlbWVudEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5uZ0hhbW1lciAmJiBjaGFuZ2VzLm5nSGFtbWVyLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5jcmVhdGVIYW1tZXJNYW5hZ2VyKCk7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsZXQgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcbiAgICBpZiAobWMuaGFuZGxlcikge1xuICAgICAgbWMuaGFtbWVyLm9mZih0aGlzLm5nSGFtbWVyLmV2ZW50LCBtYy5oYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhtYy5oYW5kbGVycykubGVuZ3RoKSB7XG4gICAgICBtYy5kZXN0cm95KCk7XG4gICAgICBtYyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSGFtbWVyTWFuYWdlcigpIHtcbiAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcikge1xuICAgICAgdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyKHRoaXMuZWxlbWVudEluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJSZWNvZ25pemVyKCkge1xuICAgIGNvbnN0IG1jOiBIYW1tZXIgPSB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXI7XG5cbiAgICAvLyBkZXRlcm1pbmUgZXZlbnQgdHlwZVxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5uZ0hhbW1lci5ldmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBldmVudCB0eXBlIGFyZ3VtZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWNvZ25pemVyLCByZWNvZ25pemVyVHlwZTtcbiAgICByZWNvZ25pemVyVHlwZSA9IGdlc3R1cmVzLmZpbmQoZ2VzdHVyZSA9PiBnZXN0dXJlID09PSBldmVudCk7XG4gICAgaWYgKCFyZWNvZ25pemVyVHlwZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBldmVudCB0eXBlOiAnICsgZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWNvZ25pemVyID0gbWMuZ2V0KHJlY29nbml6ZXJUeXBlKTtcbiAgICBpZiAoIXJlY29nbml6ZXIpIHtcbiAgICAgIHJlY29nbml6ZXIgPSBuZXcgSGFtbWVyWyh0aGlzLmNhcGl0YWxpemUocmVjb2duaXplclR5cGUpKV0oKTtcbiAgICAgIHJlY29nbml6ZXIucmVjb2duaXplV2l0aChtYy5yZWNvZ25pemVycyk7XG4gICAgICBtYy5hZGQocmVjb2duaXplcik7XG4gICAgfVxuXG4gICAgcmVjb2duaXplci5vcHRpb25zLmRpcmVjdGlvbiA9IHRoaXMuZ3VhcmREaXJlY3Rpb25zKFxuICAgICAgdGhpcy5uZ0hhbW1lci5kaXJlY3Rpb25cbiAgICApO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm5nSGFtbWVyLmhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1jLmhhbmRsZXIgPSBudWxsO1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnW25neC1oYW1tZXJdIGludmFsaWQgaGFuZGxlciBmdW5jdGlvbiBmb3Igdi1oYW1tZXI6ICcgK1xuICAgICAgICAgIHRoaXMubmdIYW1tZXIuaGFuZGxlclxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWMub24oZXZlbnQsIChtYy5oYW5kbGVyID0gdGhpcy5uZ0hhbW1lci5oYW5kbGVyKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCk7XG4gIH1cblxuICBwcml2YXRlIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBndWFyZERpcmVjdGlvbnMoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbW1lckRpcmVjdGlvbiA9ICdESVJFQ1RJT05fJyArIGRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSA+IC0xICYmXG4gICAgICAgIEhhbW1lci5oYXNPd25Qcm9wZXJ0eShoYW1tZXJEaXJlY3Rpb24pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIEhhbW1lcltoYW1tZXJEaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19