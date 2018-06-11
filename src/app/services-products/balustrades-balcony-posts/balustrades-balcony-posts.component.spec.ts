import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalustradesBalconyPostsComponent } from './balustrades-balcony-posts.component';

describe('BalustradesBalconyPostsComponent', () => {
  let component: BalustradesBalconyPostsComponent;
  let fixture: ComponentFixture<BalustradesBalconyPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalustradesBalconyPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalustradesBalconyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
