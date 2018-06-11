import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabrosblocksComponent } from './cabrosblocks.component';

describe('CabrosblocksComponent', () => {
  let component: CabrosblocksComponent;
  let fixture: ComponentFixture<CabrosblocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabrosblocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabrosblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
