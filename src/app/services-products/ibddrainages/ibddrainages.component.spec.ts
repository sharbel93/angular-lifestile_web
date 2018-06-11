import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbddrainagesComponent } from './ibddrainages.component';

describe('IbddrainagesComponent', () => {
  let component: IbddrainagesComponent;
  let fixture: ComponentFixture<IbddrainagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbddrainagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbddrainagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
