import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPreviewComponent } from './projects-preview.component';

describe('ProjectsPreviewComponent', () => {
  let component: ProjectsPreviewComponent;
  let fixture: ComponentFixture<ProjectsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
