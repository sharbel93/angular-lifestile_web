import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadcurbsComponent } from './roadcurbs.component';

describe('RoadcurbsComponent', () => {
  let component: RoadcurbsComponent;
  let fixture: ComponentFixture<RoadcurbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadcurbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadcurbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
