/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import Hammer from 'hammerjs';
import { Directive, Input, ElementRef } from '@angular/core';
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
if (false) {
    /** @type {?} */
    HammerDirective.prototype.ngHammer;
    /** @type {?} */
    HammerDirective.prototype.elementInstance;
    /** @type {?} */
    HammerDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtbWVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oYW1tZXIvIiwic291cmNlcyI6WyJsaWIvaGFtbWVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBQzlCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFJWCxNQUFNLGVBQWUsQ0FBQzs7QUFHdkIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUNyRSxNQUFNLFVBQVUsR0FBRztJQUNqQixJQUFJO0lBQ0osTUFBTTtJQUNOLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFVBQVU7SUFDVixLQUFLO0NBQ04sQ0FBQztBQUtGLE1BQU07Ozs7SUFNSixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtLQUFJOzs7OztJQUV0QyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sWUFBUyxJQUFJLE9BQU8sYUFBVSxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7Ozs7SUFFRCxXQUFXOztRQUNULElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxN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QUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9ELEVBQUUsQ0FBQyxDQUNELFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNoQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEdBQUcsU0FBUyxDQUFDLENBQUM7YUFDOUQ7U0FDRjs7OztZQTFGSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFwQkMsVUFBVTs7O3VCQXNCVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSGFtbWVyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGdlc3R1cmVzID0gWyd0YXAnLCAncGFuJywgJ3BpbmNoJywgJ3ByZXNzJywgJ3JvdGF0ZScsICdzd2lwZSddO1xuY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgJ3VwJyxcbiAgJ2Rvd24nLFxuICAnbGVmdCcsXG4gICdyaWdodCcsXG4gICdob3Jpem9udGFsJyxcbiAgJ3ZlcnRpY2FsJyxcbiAgJ2FsbCdcbl07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ0hhbW1lcl0nXG59KVxuZXhwb3J0IGNsYXNzIEhhbW1lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgbmdIYW1tZXI6IE5nSGFtbWVyQ29uZmlnO1xuXG4gIGVsZW1lbnRJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMubmdIYW1tZXIgJiYgY2hhbmdlcy5uZ0hhbW1lci5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGFtbWVyTWFuYWdlcigpO1xuICAgICAgdGhpcy5jcmVhdGVIYW1tZXJSZWNvZ25pemVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IG1jOiBIYW1tZXIgPSB0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXI7XG4gICAgaWYgKG1jLmhhbmRsZXIpIHtcbiAgICAgIG1jLmhhbW1lci5vZmYodGhpcy5uZ0hhbW1lci5ldmVudCwgbWMuaGFuZGxlcik7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LmtleXMobWMuaGFuZGxlcnMpLmxlbmd0aCkge1xuICAgICAgbWMuZGVzdHJveSgpO1xuICAgICAgbWMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUhhbW1lck1hbmFnZXIoKSB7XG4gICAgdGhpcy5lbGVtZW50SW5zdGFuY2UgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRJbnN0YW5jZS5oYW1tZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudEluc3RhbmNlLmhhbW1lciA9IG5ldyBIYW1tZXIuTWFuYWdlcih0aGlzLmVsZW1lbnRJbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSGFtbWVyUmVjb2duaXplcigpIHtcbiAgICBjb25zdCBtYzogSGFtbWVyID0gdGhpcy5lbGVtZW50SW5zdGFuY2UuaGFtbWVyO1xuXG4gICAgLy8gZGV0ZXJtaW5lIGV2ZW50IHR5cGVcbiAgICBjb25zdCBldmVudCA9IHRoaXMubmdIYW1tZXIuZXZlbnQ7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgY29uc29sZS53YXJuKCdbbmd4LWhhbW1lcl0gZXZlbnQgdHlwZSBhcmd1bWVudCBpcyByZXF1aXJlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVjb2duaXplciwgcmVjb2duaXplclR5cGU7XG4gICAgcmVjb2duaXplclR5cGUgPSBnZXN0dXJlcy5maW5kKGdlc3R1cmUgPT4gZ2VzdHVyZSA9PT0gZXZlbnQpO1xuICAgIGlmICghcmVjb2duaXplclR5cGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGludmFsaWQgZXZlbnQgdHlwZTogJyArIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVjb2duaXplciA9IG1jLmdldChyZWNvZ25pemVyVHlwZSk7XG4gICAgaWYgKCFyZWNvZ25pemVyKSB7XG4gICAgICByZWNvZ25pemVyID0gbmV3IEhhbW1lclsodGhpcy5jYXBpdGFsaXplKHJlY29nbml6ZXJUeXBlKSldKCk7XG4gICAgICByZWNvZ25pemVyLnJlY29nbml6ZVdpdGgobWMucmVjb2duaXplcnMpO1xuICAgICAgbWMuYWRkKHJlY29nbml6ZXIpO1xuICAgIH1cblxuICAgIHJlY29nbml6ZXIub3B0aW9ucy5kaXJlY3Rpb24gPSB0aGlzLmd1YXJkRGlyZWN0aW9ucyhcbiAgICAgIHRoaXMubmdIYW1tZXIuZGlyZWN0aW9uXG4gICAgKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5uZ0hhbW1lci5oYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBtYy5oYW5kbGVyID0gbnVsbDtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1tuZ3gtaGFtbWVyXSBpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb24gZm9yIHYtaGFtbWVyOiAnICtcbiAgICAgICAgICB0aGlzLm5nSGFtbWVyLmhhbmRsZXJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1jLm9uKGV2ZW50LCAobWMuaGFuZGxlciA9IHRoaXMubmdIYW1tZXIuaGFuZGxlcikpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXBpdGFsaXplKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfVxuXG4gIHByaXZhdGUgZ3VhcmREaXJlY3Rpb25zKGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBkaXJlY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBoYW1tZXJEaXJlY3Rpb24gPSAnRElSRUNUSU9OXycgKyBkaXJlY3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChcbiAgICAgICAgZGlyZWN0aW9ucy5pbmRleE9mKGRpcmVjdGlvbikgPiAtMSAmJlxuICAgICAgICBIYW1tZXIuaGFzT3duUHJvcGVydHkoaGFtbWVyRGlyZWN0aW9uKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBIYW1tZXJbaGFtbWVyRGlyZWN0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW25neC1oYW1tZXJdIGludmFsaWQgZGlyZWN0aW9uOiAnICsgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==