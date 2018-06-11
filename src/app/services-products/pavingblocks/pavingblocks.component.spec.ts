import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PavingblocksComponent } from './pavingblocks.component';

describe('PavingblocksComponent', () => {
  let component: PavingblocksComponent;
  let fixture: ComponentFixture<PavingblocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PavingblocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PavingblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
