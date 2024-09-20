import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PanelComponent } from './panel/panel.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InformeComponent } from './informe/informe.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReporteComponent } from './reporte/reporte.component';
import { InfoDiaComponent } from './info-dia/info-dia.component';
import { CancelacionesComponent } from './cancelaciones/cancelaciones.component';
import { CanalesComponent } from './canales/canales.component';
import { ProcedenciaComponent } from './procedencia/procedencia.component';
import { InfoFinancieroComponent } from './info-financiero/info-financiero.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: 'panel', component: PanelComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'informe',
    component: InformeComponent, // Componente que contiene el sidebar y segundo router-outlet
    children: [
      { path: '', redirectTo: 'reporte', pathMatch: 'full' },
      { path: 'reporte', component: ReporteComponent },
      { path: 'infoDia', component: InfoDiaComponent },
      { path: 'cancelaciones', component: CancelacionesComponent },
      { path: 'canales', component: CanalesComponent },
      { path: 'procedencia', component: ProcedenciaComponent },
      { path: 'infoFinanciero', component: InfoFinancieroComponent },

    ],
  },
];
