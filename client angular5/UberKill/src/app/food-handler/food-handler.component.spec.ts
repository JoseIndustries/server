import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHandlerComponent } from './food-handler.component';

describe('FoodHandlerComponent', () => {
  let component: FoodHandlerComponent;
  let fixture: ComponentFixture<FoodHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
