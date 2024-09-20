import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueoHabitacionComponent } from './bloqueo-habitacion.component';

describe('BloqueoHabitacionComponent', () => {
  let component: BloqueoHabitacionComponent;
  let fixture: ComponentFixture<BloqueoHabitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloqueoHabitacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueoHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
