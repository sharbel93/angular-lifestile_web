import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HatariComponent } from './hatari.component';

describe('HatariComponent', () => {
  let component: HatariComponent;
  let fixture: ComponentFixture<HatariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HatariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HatariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
