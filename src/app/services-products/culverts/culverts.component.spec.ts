import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulvertsComponent } from './culverts.component';

describe('CulvertsComponent', () => {
  let component: CulvertsComponent;
  let fixture: ComponentFixture<CulvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulvertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
