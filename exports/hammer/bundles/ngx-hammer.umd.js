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
            ngHammer: [{ type: core.Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWhhbW1lci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1oYW1tZXIvbGliL2hhbW1lci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1oYW1tZXIvbGliL2hhbW1lci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSGFtbWVyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGdlc3R1cmVzID0gWyd0YXAnLCAncGFuJywgJ3BpbmNoJywgJ3ByZXNzJywgJ3JvdGF0ZScsICdzd2lwZSddO1xuY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgJ3VwJyxcbiAgJ2Rvd24nLFxuICAnbGVmdCcsXG4gICdyaWdodCcsXG4gICdob3Jpem9udGFsJyxcbiAgJ3ZlcnRpY2FsJyxcbiAgJ2FsbCdcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0hhbW1lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgbmdIYW1tZXI6IE5nSGFtbWVyQ29uZmlnO1xuXG4gIGVsZW1lbnRJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMubmdIYW1tZXIgJiYgY2hhbmdlcy5uZ0hhbW1lci5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGFtbWVyTWFuYWdlcigpO1xuICAgICAgdGhpcy5jcmVhdGVIYW1tZXJSZWNvZ25pemVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IG1jOiBIYW1tZXIgPSB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXI7XG4gICAgaWYgKG1jLmhhbmRsZXIpIHtcbiAgICAgIG1jLmhhbW1lci5vZmYodGhpcy5uZ0hhbW1lci5ldmVudCwgbWMuaGFuZGxlcik7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LmtleXMobWMuaGFuZGxlcnMpLmxlbmd0aCkge1xuICAgICAgbWMuZGVzdHJveSgpO1xuICAgICAgbWMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhhbW1lck1hbmFnZXIoKSB7XG4gICAgdGhpcy5lbGVtZW50SW5zdGFuY2UgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lciA9IG5ldyBIYW1tZXIuTWFuYWdlcih0aGlzLmVsZW1lbnRJbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSGFtbWVyUmVjb2duaXplcigpIHtcbiAgICBjb25zdCBtYzogSGFtbWVyID0gdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyO1xuXG4gICAgLy8gZGV0ZXJtaW5lIGV2ZW50IHR5cGVcbiAgICBjb25zdCBldmVudCA9IHRoaXMubmdIYW1tZXIuZXZlbnQ7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gZXZlbnQgdHlwZSBhcmd1bWVudCBpcyByZXF1aXJlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVjb2duaXplciwgcmVjb2duaXplclR5cGU7XG4gICAgcmVjb2duaXplclR5cGUgPSBnZXN0dXJlcy5maW5kKGdlc3R1cmUgPT4gZ2VzdHVyZSA9PT0gZXZlbnQpO1xuICAgIGlmICghcmVjb2duaXplclR5cGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGludmFsaWQgZXZlbnQgdHlwZTogJyArIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVjb2duaXplciA9IG1jLmdldChyZWNvZ25pemVyVHlwZSk7XG4gICAgaWYgKCFyZWNvZ25pemVyKSB7XG4gICAgICByZWNvZ25pemVyID0gbmV3IEhhbW1lclsodGhpcy5jYXBpdGFsaXplKHJlY29nbml6ZXJUeXBlKSldKCk7XG4gICAgICByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgobWMucmVjb2duaXplcnMpO1xuICAgICAgbWMuYWRkKHJlY29nbml6ZXIpO1xuICAgIH1cblxuICAgIHJlY29nbml6ZXIub3B0aW9ucy5kaXJlY3Rpb24gPSB0aGlzLmd1YXJkRGlyZWN0aW9ucyhcbiAgICAgIHRoaXMubmdIYW1tZXIuZGlyZWN0aW9uXG4gICAgKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5uZ0hhbW1lci5oYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtYy5oYW5kbGVyID0gbnVsbDtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1tuZ3gtaGFtbWVyXSBpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb24gZm9yIHYtaGFtbWVyOiAnICtcbiAgICAgICAgICB0aGlzLm5nSGFtbWVyLmhhbmRsZXJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1jLm9uKGV2ZW50LCAobWMuaGFuZGxlciA9IHRoaXMubmdIYW1tZXIuaGFuZGxlcikpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXBpdGFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ3VhcmREaXJlY3Rpb25zKGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBkaXJlY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBoYW1tZXJEaXJlY3Rpb24gPSAnRElSRUNUSU9OXycgKyBkaXJlY3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChcbiAgICAgICAgZGlyZWN0aW9ucy5pbmRleE9mKGRpcmVjdGlvbikgPiAtMSAmJlxuICAgICAgICBIYW1tZXIuaGFzT3duUHJvcGVydHkoaGFtbWVyRGlyZWN0aW9uKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBIYW1tZXJbaGFtbWVyRGlyZWN0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGludmFsaWQgZGlyZWN0aW9uOiAnICsgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSGFtbWVyRGlyZWN0aXZlIH0gZnJvbSAnLi9oYW1tZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hhbW1lckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtIYW1tZXJEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lck1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQVdBLElBQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7SUFDckUsSUFBTSxVQUFVLEdBQUc7UUFDakIsSUFBSTtRQUNK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