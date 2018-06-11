import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KerraboundaryComponent } from './kerraboundary.component';

describe('KerraboundaryComponent', () => {
  let component: KerraboundaryComponent;
  let fixture: ComponentFixture<KerraboundaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KerraboundaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerraboundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
