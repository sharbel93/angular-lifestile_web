import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavingslabsComponent } from './pavingslabs.component';

describe('PavingslabsComponent', () => {
  let component: PavingslabsComponent;
  let fixture: ComponentFixture<PavingslabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavingslabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavingslabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
