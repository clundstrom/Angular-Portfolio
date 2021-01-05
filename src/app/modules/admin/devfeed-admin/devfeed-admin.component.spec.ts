import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevfeedAdminComponent } from './devfeed-admin.component';

describe('DevfeedAdminComponent', () => {
  let component: DevfeedAdminComponent;
  let fixture: ComponentFixture<DevfeedAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevfeedAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevfeedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
