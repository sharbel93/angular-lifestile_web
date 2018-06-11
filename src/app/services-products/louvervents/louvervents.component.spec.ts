import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouverventsComponent } from './louvervents.component';

describe('LouverventsComponent', () => {
  let component: LouverventsComponent;
  let fixture: ComponentFixture<LouverventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouverventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouverventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
