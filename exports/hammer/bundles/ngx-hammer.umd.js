(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hammerjs'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-hammer', ['exports', 'hammerjs', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-hammer'] = {}),global.Hammer,global.ng.core,global.ng.common));
}(this, (function (exports,Hammer,core,common) { 'use strict';

    Hammer = Hammer && Hammer.hasOwnProperty('default') ? Hammer['default'] : Hammer;

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
    var HammerDirective = (function () {
        function HammerDirective(el) {
            this.el = el;
            this.eventTriggered = new core.EventEmitter();
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
                mc.on(event, (mc.handler = this.trigger.bind(this)));
            };
        /**
         * @param {?} e
         * @return {?}
         */
        HammerDirective.prototype.trigger = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                this.eventTriggered.emit(e);
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
            { type: core.Directive, args: [{
                        selector: '[ngHammer]'
                    },] }
        ];
        /** @nocollapse */
        HammerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        HammerDirective.propDecorators = {
            ngHammer: [{ type: core.Input }],
            eventTriggered: [{ type: core.Output }]
        };
        return HammerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HammerModule = (function () {
        function HammerModule() {
        }
        HammerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.HammerModule = HammerModule;
    exports.HammerDirective = HammerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWhhbW1lci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1oYW1tZXIvbGliL2hhbW1lci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1oYW1tZXIvbGliL2hhbW1lci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0hhbW1lckNvbmZpZyB9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBnZXN0dXJlcyA9IFsndGFwJywgJ3BhbicsICdwaW5jaCcsICdwcmVzcycsICdyb3RhdGUnLCAnc3dpcGUnXTtcbmNvbnN0IGRpcmVjdGlvbnMgPSBbXG4gICd1cCcsXG4gICdkb3duJyxcbiAgJ2xlZnQnLFxuICAncmlnaHQnLFxuICAnaG9yaXpvbnRhbCcsXG4gICd2ZXJ0aWNhbCcsXG4gICdhbGwnXG5dO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdIYW1tZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBIYW1tZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIG5nSGFtbWVyOiBOZ0hhbW1lckNvbmZpZztcblxuICBAT3V0cHV0KClcbiAgZXZlbnRUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5uZ0hhbW1lciAmJiBjaGFuZ2VzLm5nSGFtbWVyLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5jcmVhdGVIYW1tZXJNYW5hZ2VyKCk7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBsZXQgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcbiAgICBpZiAobWMuaGFuZGxlcikge1xuICAgICAgbWMuaGFtbWVyLm9mZih0aGlzLm5nSGFtbWVyLmV2ZW50LCBtYy5oYW5kbGVyKTtcbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhtYy5oYW5kbGVycykubGVuZ3RoKSB7XG4gICAgICBtYy5kZXN0cm95KCk7XG4gICAgICBtYyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSGFtbWVyTWFuYWdlcigpIHtcbiAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcikge1xuICAgICAgdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyKHRoaXMuZWxlbWVudEluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJSZWNvZ25pemVyKCkge1xuICAgIGNvbnN0IG1jOiBIYW1tZXIgPSB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXI7XG5cbiAgICAvLyBkZXRlcm1pbmUgZXZlbnQgdHlwZVxuICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5uZ0hhbW1lci5ldmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBldmVudCB0eXBlIGFyZ3VtZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWNvZ25pemVyLCByZWNvZ25pemVyVHlwZTtcbiAgICByZWNvZ25pemVyVHlwZSA9IGdlc3R1cmVzLmZpbmQoZ2VzdHVyZSA9PiBnZXN0dXJlID09PSBldmVudCk7XG4gICAgaWYgKCFyZWNvZ25pemVyVHlwZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBldmVudCB0eXBlOiAnICsgZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWNvZ25pemVyID0gbWMuZ2V0KHJlY29nbml6ZXJUeXBlKTtcbiAgICBpZiAoIXJlY29nbml6ZXIpIHtcbiAgICAgIHJlY29nbml6ZXIgPSBuZXcgSGFtbWVyWyh0aGlzLmNhcGl0YWxpemUocmVjb2duaXplclR5cGUpKV0oKTtcbiAgICAgIHJlY29nbml6ZXIucmVjb2duaXplV2l0aChtYy5yZWNvZ25pemVycyk7XG4gICAgICBtYy5hZGQocmVjb2duaXplcik7XG4gICAgfVxuXG4gICAgcmVjb2duaXplci5vcHRpb25zLmRpcmVjdGlvbiA9IHRoaXMuZ3VhcmREaXJlY3Rpb25zKFxuICAgICAgdGhpcy5uZ0hhbW1lci5kaXJlY3Rpb25cbiAgICApO1xuXG4gICAgbWMub24oZXZlbnQsIChtYy5oYW5kbGVyID0gdGhpcy50cmlnZ2VyLmJpbmQodGhpcykpKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlcihlKSB7XG4gICAgdGhpcy5ldmVudFRyaWdnZXJlZC5lbWl0KGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXBpdGFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ3VhcmREaXJlY3Rpb25zKGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBkaXJlY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBoYW1tZXJEaXJlY3Rpb24gPSAnRElSRUNUSU9OXycgKyBkaXJlY3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChcbiAgICAgICAgZGlyZWN0aW9ucy5pbmRleE9mKGRpcmVjdGlvbikgPiAtMSAmJlxuICAgICAgICBIYW1tZXIuaGFzT3duUHJvcGVydHkoaGFtbWVyRGlyZWN0aW9uKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBIYW1tZXJbaGFtbWVyRGlyZWN0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGludmFsaWQgZGlyZWN0aW9uOiAnICsgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSGFtbWVyRGlyZWN0aXZlIH0gZnJvbSAnLi9oYW1tZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hhbW1lckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtIYW1tZXJEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQWFBLElBQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7SUFDckUsSUFBTSxVQUFVLEdBQUc7UUFDakIsSUFBSTtRQUNKLE1BQU07UUFDTixNQUFNO1FBQ04sT0FBTztRQUNQLFlBQVk7UUFDWixVQUFVO1FBQ1YsS0FBSztLQUNOLENBQUM7O1FBY0EseUJBQW9CLEVB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