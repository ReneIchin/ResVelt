import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent {

}
