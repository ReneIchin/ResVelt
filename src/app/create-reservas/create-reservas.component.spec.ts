import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservasComponent } from './create-reservas.component';

describe('CreateReservasComponent', () => {
  let component: CreateReservasComponent;
  let fixture: ComponentFixture<CreateReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateReservasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});