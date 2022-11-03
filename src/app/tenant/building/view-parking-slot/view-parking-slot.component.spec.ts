import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParkingSlotComponent } from './view-parking-slot.component';

describe('ViewParkingSlotComponent', () => {
  let component: ViewParkingSlotComponent;
  let fixture: ComponentFixture<ViewParkingSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParkingSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParkingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
