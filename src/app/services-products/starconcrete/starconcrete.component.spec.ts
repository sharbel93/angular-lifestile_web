import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarconcreteComponent } from './starconcrete.component';

describe('StarconcreteComponent', () => {
  let component: StarconcreteComponent;
  let fixture: ComponentFixture<StarconcreteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarconcreteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarconcreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
