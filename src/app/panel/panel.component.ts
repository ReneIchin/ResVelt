import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{

      data: [1, 2, 3,2,3,23,2,3,23,23,2,9],
      type: 'line'
    }],
    title:{
      text:'datos'
    },
    xAxis:{
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], // Nombres de las columnas
      title: {
        text: 'Meses del Año' // Título del eje X
      },
      labels: {
        style: {
          color: '#333333'
        }
      }
    }

  };

}
