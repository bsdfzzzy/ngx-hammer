/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import Hammer from 'hammerjs';
import { Directive, Input, ElementRef, Output, EventEmitter } from '@angular/core';
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
export class HammerDirective {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oYW1tZXIvIiwic291cmNlcyI6WyJsaWIvaGFtbWVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQzlCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFJVixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDOztBQUd2QixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBQ3JFLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLElBQUk7SUFDSixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osVUFBVTtJQUNWLEtBQUs7Q0FDTixDQUFDO0FBS0YsTUFBTTs7OztJQVNKLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzhCQUpqQixJQUFJLFlBQVksRUFBRTtLQUlHOzs7OztJQUV0QyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sWUFBUyxJQUFJLE9BQU8sYUFBVSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7Ozs7SUFFRCxXQUFXOztRQUNULElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8s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YyxDQUFDLGVBQWUsQ0FDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNoQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDOUQ7U0FDRjs7OztZQXhGSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUF0QkMsVUFBVTs7O3VCQXdCVCxLQUFLOzZCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSGFtbWVyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGdlc3R1cmVzID0gWyd0YXAnLCAncGFuJywgJ3BpbmNoJywgJ3ByZXNzJywgJ3JvdGF0ZScsICdzd2lwZSddO1xuY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgJ3VwJyxcbiAgJ2Rvd24nLFxuICAnbGVmdCcsXG4gICdyaWdodCcsXG4gICdob3Jpem9udGFsJyxcbiAgJ3ZlcnRpY2FsJyxcbiAgJ2FsbCdcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0hhbW1lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgbmdIYW1tZXI6IE5nSGFtbWVyQ29uZmlnO1xuXG4gIEBPdXRwdXQoKVxuICBldmVudFRyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLm5nSGFtbWVyICYmIGNoYW5nZXMubmdIYW1tZXIuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLmNyZWF0ZUhhbW1lck1hbmFnZXIoKTtcbiAgICAgIHRoaXMuY3JlYXRlSGFtbWVyUmVjb2duaXplcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGxldCBtYzogSGFtbWVyID0gdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyO1xuICAgIGlmIChtYy5oYW5kbGVyKSB7XG4gICAgICBtYy5oYW1tZXIub2ZmKHRoaXMubmdIYW1tZXIuZXZlbnQsIG1jLmhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoIU9iamVjdC5rZXlzKG1jLmhhbmRsZXJzKS5sZW5ndGgpIHtcbiAgICAgIG1jLmRlc3Ryb3koKTtcbiAgICAgIG1jID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVIYW1tZXJNYW5hZ2VyKCkge1xuICAgIHRoaXMuZWxlbWVudEluc3RhbmNlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXIgPSBuZXcgSGFtbWVyLk1hbmFnZXIodGhpcy5lbGVtZW50SW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhhbW1lclJlY29nbml6ZXIoKSB7XG4gICAgY29uc3QgbWM6IEhhbW1lciA9IHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lcjtcblxuICAgIC8vIGRldGVybWluZSBldmVudCB0eXBlXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLm5nSGFtbWVyLmV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGV2ZW50IHR5cGUgYXJndW1lbnQgaXMgcmVxdWlyZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlY29nbml6ZXIsIHJlY29nbml6ZXJUeXBlO1xuICAgIHJlY29nbml6ZXJUeXBlID0gZ2VzdHVyZXMuZmluZChnZXN0dXJlID0+IGdlc3R1cmUgPT09IGV2ZW50KTtcbiAgICBpZiAoIXJlY29nbml6ZXJUeXBlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tuZ3gtaGFtbWVyXSBpbnZhbGlkIGV2ZW50IHR5cGU6ICcgKyBldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlY29nbml6ZXIgPSBtYy5nZXQocmVjb2duaXplclR5cGUpO1xuICAgIGlmICghcmVjb2duaXplcikge1xuICAgICAgcmVjb2duaXplciA9IG5ldyBIYW1tZXJbKHRoaXMuY2FwaXRhbGl6ZShyZWNvZ25pemVyVHlwZSkpXSgpO1xuICAgICAgcmVjb2duaXplci5yZWNvZ25pemVXaXRoKG1jLnJlY29nbml6ZXJzKTtcbiAgICAgIG1jLmFkZChyZWNvZ25pemVyKTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVyLm9wdGlvbnMuZGlyZWN0aW9uID0gdGhpcy5ndWFyZERpcmVjdGlvbnMoXG4gICAgICB0aGlzLm5nSGFtbWVyLmRpcmVjdGlvblxuICAgICk7XG5cbiAgICBtYy5vbihldmVudCwgKG1jLmhhbmRsZXIgPSB0aGlzLnRyaWdnZXIuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyKGUpIHtcbiAgICB0aGlzLmV2ZW50VHJpZ2dlcmVkLmVtaXQoZSk7XG4gIH1cblxuICBwcml2YXRlIGNhcGl0YWxpemUoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBndWFyZERpcmVjdGlvbnMoZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGRpcmVjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGhhbW1lckRpcmVjdGlvbiA9ICdESVJFQ1RJT05fJyArIGRpcmVjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFxuICAgICAgICBkaXJlY3Rpb25zLmluZGV4T2YoZGlyZWN0aW9uKSA+IC0xICYmXG4gICAgICAgIEhhbW1lci5oYXNPd25Qcm9wZXJ0eShoYW1tZXJEaXJlY3Rpb24pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIEhhbW1lcltoYW1tZXJEaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gaW52YWxpZCBkaXJlY3Rpb246ICcgKyBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19