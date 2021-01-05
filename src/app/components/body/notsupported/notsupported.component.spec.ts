import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotsupportedComponent } from './notsupported.component';

describe('NotsupportedComponent', () => {
  let component: NotsupportedComponent;
  let fixture: ComponentFixture<NotsupportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotsupportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotsupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
