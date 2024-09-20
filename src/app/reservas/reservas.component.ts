import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { DynamicModalComponent } from '../dynamic-modal/dynamic-modal.component';
import { ModalService } from '../modal.service';
import { CreateReservasComponent } from '../create-reservas/create-reservas.component';
import { BloqueoHabitacionComponent } from '../bloqueo-habitacion/bloqueo-habitacion.component';


@Component({
  selector: 'app-reservas',
  standalone: true,
  imports:[],
  template: `<div class="container-fluid">
  <div class="row">
    <div class="card">
      <div class="card-header d-flex justify-content-end align-items-center">
      <form action="" class="d-flex align-items-center">
          <input type="date" name="" id="" class="form-control me-2">
          <input type="submit" value="Buscar" class="btn btn-primary me-2">
          <div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Nuevo <i class="fa fa-user-plus"></i>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" (click)="openModal('createReserva')"><i class="fa fa-plus"></i>&nbsp; Nueva Reserva</a></li>
              <li><a class="dropdown-item" (click)="openModal('bloqueHabitacion')"><i class="fa fa-home"></i>&nbsp; Bloque habitación  </a></li>
            </ul>
          </div>
        </form>
      </div>
      <div class="card-body">
        <div id="calendar" style="height: 500px;"></div>
      </div>
    </div>
  </div>
</div>
`,
  styles: [],
})
export class ReservasComponent  implements  AfterViewInit {

  @ViewChild(DynamicModalComponent) dynamicModal?: DynamicModalComponent;

  constructor(private modalService: ModalService) { }

  openModal(componentRuta : string) {
    let componentToLoad: any;

    if(componentRuta == "createReserva"){
      componentToLoad = CreateReservasComponent;
    this.modalService.openModal(componentToLoad, "xl");
    }
    else if(componentRuta == "bloqueHabitacion"){
      componentToLoad = BloqueoHabitacionComponent;
    this.modalService.openModal(componentToLoad, "lg");
    }
    // Abre el modal con el componente especificado y un tamaño de 'lg' (puedes cambiar el tamaño)
    // this.modalService.openModal(componentToLoad, "xl");
  }


  ngAfterViewInit(): void {
    // Obtener el elemento del DOM por su ID
    const calendarEl = document.getElementById('calendar');

    // Verificar que el elemento no sea nulo y esté presente en el DOM
    if (calendarEl) {
      // Crear una nueva instancia de FullCalendar
      const calendar = new Calendar(calendarEl, {
        plugins: [resourceTimelinePlugin],
        initialView: 'resourceTimelineWeek', // Usar una vista válida
        resources: [
          { id: '1', title: 'Recurso A' },
          { id: '2', title: 'Recurso B' }
        ],
        events: [
          // Ejemplo de eventos para visualizar datos en el calendario
          { id: '1', resourceId: '1', start: '2024-09-20T09:00:00', end: '2024-09-20T12:00:00', title: 'Evento 1' },
          { id: '2', resourceId: '2', start: '2024-09-21T10:00:00', end: '2024-09-21T15:00:00', title: 'Evento 2' }
        ]
      });

      // Renderizar el calendario en el contenedor seleccionado
      calendar.render();
    } else {
      console.error("Elemento con id 'calendar' no encontrado en el DOM.");
    }
  }
}
