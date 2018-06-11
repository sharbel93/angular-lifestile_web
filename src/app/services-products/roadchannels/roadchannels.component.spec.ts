import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadchannelsComponent } from './roadchannels.component';

describe('RoadchannelsComponent', () => {
  let component: RoadchannelsComponent;
  let fixture: ComponentFixture<RoadchannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadchannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
