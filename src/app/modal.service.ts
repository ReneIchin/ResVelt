import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  openModal(component: any, size: 'sm' | 'lg' | 'xl' = 'lg', action?: string) {
    const modalOptions: NgbModalOptions = {
      size: size, // Tamaño del modal
      backdrop: 'static', // Opcional: para que no se cierre el modal al hacer click fuera de él
      keyboard: true, // Para cerrar el modal con la tecla 'Esc'
    };

    const modalRef = this.modalService.open(component, modalOptions);

    if (action) {
      modalRef.componentInstance.action = action;
    }

    return modalRef;
  }

}
