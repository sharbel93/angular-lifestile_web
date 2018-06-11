import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerventsComponent } from './flowervents.component';

describe('FlowerventsComponent', () => {
  let component: FlowerventsComponent;
  let fixture: ComponentFixture<FlowerventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
