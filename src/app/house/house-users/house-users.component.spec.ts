import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseUsersComponent } from './house-users.component';

describe('HouseUsersComponent', () => {
  let component: HouseUsersComponent;
  let fixture: ComponentFixture<HouseUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
