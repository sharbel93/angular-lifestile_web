import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrazobenchComponent } from './terrazobench.component';

describe('TerrazobenchComponent', () => {
  let component: TerrazobenchComponent;
  let fixture: ComponentFixture<TerrazobenchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrazobenchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrazobenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
