/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import Hammer from 'hammerjs';
import { Directive, Input, ElementRef, Output, EventEmitter } from '@angular/core';
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
        this.eventTriggered = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[ngHammer]'
                },] }
    ];
    /** @nocollapse */
    HammerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HammerDirective.propDecorators = {
        ngHammer: [{ type: Input }],
        eventTriggered: [{ type: Output }]
    };
    return HammerDirective;
}());
export { HammerDirective };
if (false) {
    /** @type {?} */
    HammerDirective.prototype.ngHammer;
    /** @type {?} */
    HammerDirective.prototype.eventTriggered;
    /** @type {?} */
    HammerDirective.prototype.elementInstance;
    /** @type {?} */
    HammerDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oYW1tZXIvIiwic291cmNlcyI6WyJsaWIvaGFtbWVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQzlCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFJVixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOztBQUd2QixJQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBQ3JFLElBQU0sVUFBVSxHQUFHO0lBQ2pCLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osVUFBVTtJQUNWLEtBQUs7Q0FDTixDQUFDOztJQWNBLHlCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs4QkFKakIsSUFBSSxZQUFZLEVBQUU7S0FJRzs7Ozs7SUFFdEMscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLFlBQVMsSUFBSSxPQUFPLGFBQVUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtLQUNGOzs7O0lBRUQscUNBQVc7OztJQUFYOztRQUNFLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFD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QUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUN2QyxDQUFDLENBQUMsQ0FBQztnQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2hDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxTQUFTLENBQUMsQ0FBQzthQUM5RDtTQUNGOzs7Z0JBeEZKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBdEJDLFVBQVU7OzsyQkF3QlQsS0FBSztpQ0FHTCxNQUFNOzswQkEvQlQ7O1NBMkJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSGFtbWVyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGdlc3R1cmVzID0gWyd0YXAnLCAncGFuJywgJ3BpbmNoJywgJ3ByZXNzJywgJ3JvdGF0ZScsICdzd2lwZSddO1xuY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgJ3VwJyxcbiAgJ2Rvd24nLFxuICAnbGVmdCcsXG4gICdyaWdodCcsXG4gICdob3Jpem9udGFsJyxcbiAgJ3ZlcnRpY2FsJyxcbiAgJ2FsbCdcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0hhbW1lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgbmdIYW1tZXI6IE5nSGFtbWVyQ29uZmlnO1xuXG4gIEBPdXRwdXQoKVxuICBldmVudFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLm5nSGFtbWVyICYmIGNoYW5nZXMubmdIYW1tZXIuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lck1hbmFnZXIoKTtcbiAgICAgIHRoaXMuY3JlYXRlSGFtbWVyUmVjb2duaXplcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGxldCBtYzogSGFtbWVyID0gdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyO1xuICAgIGlmIChtYy5oYW5kbGVyKSB7XG4gICAgICBtYy5oYW1tZXIub2ZmKHRoaXMubmdIYW1tZXIuZXZlbnQsIG1jLmhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5rZXlzKG1jLmhhbmRsZXJzKS5sZW5ndGgpIHtcbiAgICAgIG1jLmRlc3Ryb3koKTtcbiAgICAgIG1jID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJNYW5hZ2VyKCkge1xuICAgIHRoaXMuZWxlbWVudEluc3RhbmNlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXIgPSBuZXcgSGFtbWVyLk1hbmFnZXIodGhpcy5lbGVtZW50SW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKSB7XG4gICAgY29uc3QgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcblxuICAgIC8vIGRldGVybWluZSBldmVudCB0eXBlXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLm5nSGFtbWVyLmV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGV2ZW50IHR5cGUgYXJndW1lbnQgaXMgcmVxdWlyZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlY29nbml6ZXIsIHJlY29nbml6ZXJUeXBlO1xuICAgIHJlY29nbml6ZXJUeXBlID0gZ2VzdHVyZXMuZmluZChnZXN0dXJlID0+IGdlc3R1cmUgPT09IGV2ZW50KTtcbiAgICBpZiAoIXJlY29nbml6ZXJUeXBlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBpbnZhbGlkIGV2ZW50IHR5cGU6ICcgKyBldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlY29nbml6ZXIgPSBtYy5nZXQocmVjb2duaXplclR5cGUpO1xuICAgIGlmICghcmVjb2duaXplcikge1xuICAgICAgcmVjb2duaXplciA9IG5ldyBIYW1tZXJbKHRoaXMuY2FwaXRhbGl6ZShyZWNvZ25pemVyVHlwZSkpXSgpO1xuICAgICAgcmVjb2duaXplci5yZWNvZ25pemVXaXRoKG1jLnJlY29nbml6ZXJzKTtcbiAgICAgIG1jLmFkZChyZWNvZ25pemVyKTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVyLm9wdGlvbnMuZGlyZWN0aW9uID0gdGhpcy5ndWFyZERpcmVjdGlvbnMoXG4gICAgICB0aGlzLm5nSGFtbWVyLmRpcmVjdGlvblxuICAgICk7XG5cbiAgICBtYy5vbihldmVudCwgKG1jLmhhbmRsZXIgPSB0aGlzLnRyaWdnZXIuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyKGUpIHtcbiAgICB0aGlzLmV2ZW50VHJpZ2dlcmVkLmVtaXQoZSk7XG4gIH1cblxuICBwcml2YXRlIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBndWFyZERpcmVjdGlvbnMoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbW1lckRpcmVjdGlvbiA9ICdESVJFQ1RJT05fJyArIGRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSA+IC0xICYmXG4gICAgICAgIEhhbW1lci5oYXNPd25Qcm9wZXJ0eShoYW1tZXJEaXJlY3Rpb24pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIEhhbW1lcltoYW1tZXJEaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19