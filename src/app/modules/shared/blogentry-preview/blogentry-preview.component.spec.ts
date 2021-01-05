import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogentryPreviewComponent } from './blogentry-preview.component';

describe('BlogentryPreviewComponent', () => {
  let component: BlogentryPreviewComponent;
  let fixture: ComponentFixture<BlogentryPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogentryPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogentryPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
