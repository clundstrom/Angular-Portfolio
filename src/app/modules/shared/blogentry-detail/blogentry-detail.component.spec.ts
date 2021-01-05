import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogentryDetailComponent } from './blogentry-detail.component';

describe('BlogentryDetailComponent', () => {
  let component: BlogentryDetailComponent;
  let fixture: ComponentFixture<BlogentryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogentryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogentryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
