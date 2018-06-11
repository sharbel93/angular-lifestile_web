import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowcillComponent } from './windowcill.component';

describe('WindowcillComponent', () => {
  let component: WindowcillComponent;
  let fixture: ComponentFixture<WindowcillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowcillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowcillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
