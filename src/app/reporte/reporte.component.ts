import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{

      data: [1, 2, 3,2,3,23,2,3,23,23,2,9],
      type: 'column'
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



  // constructor(private dataService: DataService) { }

  // ngAfterViewInit(): void {
  //   this.dataService.getData().subscribe(data => {
  //     // Supongamos que data tiene la estructura { months: [], values: [] }
  //     this.chartOptions.xAxis.categories = data.months;
  //     this.chartOptions.series = [{
  //       name: 'Datos Mensuales',
  //       data: data.values,
  //       type: 'column'
  //     }];

  //     // Renderiza el gráfico con las nuevas opciones
  //     Highcharts.chart('container', this.chartOptions);
  //   });
  // }

}
