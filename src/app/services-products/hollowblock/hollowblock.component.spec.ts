import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowblockComponent } from './hollowblock.component';

describe('HollowblockComponent', () => {
  let component: HollowblockComponent;
  let fixture: ComponentFixture<HollowblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollowblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollowblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
