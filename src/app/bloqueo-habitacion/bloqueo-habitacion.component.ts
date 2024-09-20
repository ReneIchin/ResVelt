import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bloqueo-habitacion',
  standalone: true,
  imports: [],
  templateUrl: './bloqueo-habitacion.component.html',
  styleUrl: './bloqueo-habitacion.component.css'
})
export class BloqueoHabitacionComponent {

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();  // Cierra el modal
  }

}
