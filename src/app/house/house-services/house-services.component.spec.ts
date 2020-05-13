import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseServicesComponent } from './house-services.component';

describe('HouseServicesComponent', () => {
  let component: HouseServicesComponent;
  let fixture: ComponentFixture<HouseServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
