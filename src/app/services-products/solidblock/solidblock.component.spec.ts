import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidblockComponent } from './solidblock.component';

describe('SolidblockComponent', () => {
  let component: SolidblockComponent;
  let fixture: ComponentFixture<SolidblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
