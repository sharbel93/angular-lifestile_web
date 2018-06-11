import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideslabComponent } from './sideslab.component';

describe('SideslabComponent', () => {
  let component: SideslabComponent;
  let fixture: ComponentFixture<SideslabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
