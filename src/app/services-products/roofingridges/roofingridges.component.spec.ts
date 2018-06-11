import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofingridgesComponent } from './roofingridges.component';

describe('RoofingridgesComponent', () => {
  let component: RoofingridgesComponent;
  let fixture: ComponentFixture<RoofingridgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoofingridgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoofingridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
