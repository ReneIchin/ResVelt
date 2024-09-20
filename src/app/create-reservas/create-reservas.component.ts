import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-reservas',
  standalone: true,
  imports: [],
  templateUrl: './create-reservas.component.html',
  styleUrl: './create-reservas.component.css'
})
export class CreateReservasComponent {

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();  // Cierra el modal
  }

}
