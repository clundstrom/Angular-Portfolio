import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevfeedComponent } from './devfeed.component';

describe('DevfeedComponent', () => {
  let component: DevfeedComponent;
  let fixture: ComponentFixture<DevfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
