import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JlokComponent } from './jlok.component';

describe('JlokComponent', () => {
  let component: JlokComponent;
  let fixture: ComponentFixture<JlokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JlokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JlokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
