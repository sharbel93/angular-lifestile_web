import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicfloorComponent } from './ceramicfloor.component';

describe('CeramicfloorComponent', () => {
  let component: CeramicfloorComponent;
  let fixture: ComponentFixture<CeramicfloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicfloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicfloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
