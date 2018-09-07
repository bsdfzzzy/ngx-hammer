import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { HammerDirective } from './hammer.directive';
import { By } from '@angular/platform-browser';

describe('HammerDirective', () => {
  let directives: DebugElement[];
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [HammerDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    directives = fixture.debugElement.queryAll(By.directive(HammerDirective));
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(directives).toBeTruthy();
    expect(component).toBeTruthy();
    expect(directives.length).toEqual(1);
  });

  // it('should get gesture and direction', () => {
  //   expect(directives.hammerGesture).toBeTruthy();
  //   expect(directives.forEach(a => a.)).toBeTruthy();
  // });
});

@Component({
  template: `
    <h2 ngHammer hammerGesture="swipe" hammerDirection="left">Something Yellow</h2>
  `
})
class TestComponent {}
