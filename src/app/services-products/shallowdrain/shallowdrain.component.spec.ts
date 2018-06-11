import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShallowdrainComponent } from './shallowdrain.component';

describe('ShallowdrainComponent', () => {
  let component: ShallowdrainComponent;
  let fixture: ComponentFixture<ShallowdrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShallowdrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShallowdrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
