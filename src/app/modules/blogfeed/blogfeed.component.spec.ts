import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogfeedComponent } from './blogfeed.component';

describe('BlogfeedComponent', () => {
  let component: BlogfeedComponent;
  let fixture: ComponentFixture<BlogfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
