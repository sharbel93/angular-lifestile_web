import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumncoupingsComponent } from './columncoupings.component';

describe('ColumncoupingsComponent', () => {
  let component: ColumncoupingsComponent;
  let fixture: ComponentFixture<ColumncoupingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumncoupingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumncoupingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
