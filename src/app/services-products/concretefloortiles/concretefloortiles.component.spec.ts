import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretefloortilesComponent } from './concretefloortiles.component';

describe('ConcretefloortilesComponent', () => {
  let component: ConcretefloortilesComponent;
  let fixture: ComponentFixture<ConcretefloortilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcretefloortilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcretefloortilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
