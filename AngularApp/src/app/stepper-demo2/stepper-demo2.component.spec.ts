import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperDemo2Component } from './stepper-demo2.component';

describe('StepperDemo2Component', () => {
  let component: StepperDemo2Component;
  let fixture: ComponentFixture<StepperDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperDemo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
