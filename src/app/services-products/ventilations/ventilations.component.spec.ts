import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentilationsComponent } from './ventilations.component';

describe('VentilationsComponent', () => {
  let component: VentilationsComponent;
  let fixture: ComponentFixture<VentilationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentilationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentilationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
