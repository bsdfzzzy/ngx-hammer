import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HammerComponent } from './hammer.component';

describe('HammerComponent', () => {
  let component: HammerComponent;
  let fixture: ComponentFixture<HammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
