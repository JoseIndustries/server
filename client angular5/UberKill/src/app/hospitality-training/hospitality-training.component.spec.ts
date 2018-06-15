import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityTrainingComponent } from './hospitality-training.component';

describe('HospitalityTrainingComponent', () => {
  let component: HospitalityTrainingComponent;
  let fixture: ComponentFixture<HospitalityTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalityTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalityTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
