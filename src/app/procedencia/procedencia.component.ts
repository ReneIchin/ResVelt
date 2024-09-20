import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
// import * as am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow"; // Geodata correcta para amCharts 5
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
// import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-procedencia',
  standalone: true,
  imports: [],
  templateUrl: './procedencia.component.html',
  styleUrl: './procedencia.component.css'
})
export class ProcedenciaComponent implements OnInit, OnDestroy{



  private root!: am5.Root;
  private highlightCountries: string[] = ["US", "CN", "IN"]; // Ejemplo de países a resaltar
  public chart :any;

  ngOnInit(): void {
    // Inicializar el mapa en el ciclo de vida de Angular
    this.root = am5.Root.new("chartdiv");

    // Aplicar temas
    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);

    // Crear el mapa
    let chart = this.root.container.children.push(am5map.MapChart.new(this.root, {
      panX: "translateX",
      panY: "translateY",
      projection: am5map.geoMercator()
    }));
// Verificar el contenido de GeoJSON
    if (am5geodata_worldLow && Object.keys(am5geodata_worldLow).length > 0) {
      // Crear la serie de polígonos (países)
      let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow as any,  // Castear a tipo any
        exclude: ["AQ"]  // Excluir la Antártida
      }));


    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      toggleKey: "active",
      interactive: true
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: this.root.interfaceColors.get("primaryButtonHover")
    });

    polygonSeries.mapPolygons.template.states.create("active", {
      fill: this.root.interfaceColors.get("primaryButtonHover")
    });


        // Resaltar países
        polygonSeries.events.on("datavalidated", () => {
          polygonSeries.mapPolygons.each((polygon) => {
            const dataItem = polygon.dataItem as am5.DataItem<am5map.IMapPolygonSeriesDataItem> | undefined;
            if (dataItem && dataItem.dataContext && typeof dataItem.dataContext === 'object') {
              const countryCode = (dataItem.dataContext as any).id;
              if (countryCode && this.highlightCountries.includes(countryCode)) {
                polygon.set("fill", am5.color(0xFF0000)); // Color para países resaltados
                polygon.set("stroke", am5.color(0x000000)); // Borde para países resaltados
              }
            }
          });
        });

    // Declarar previousPolygon con tipo específico
    let previousPolygon: am5map.MapPolygon | undefined;

    // Manejar el zoom al hacer clic en un país
    polygonSeries.mapPolygons.template.on("active", (active, target) => {
      if (target) {  // Verificar que target no sea undefined
        // Verificar si target.dataItem no es undefined
        const dataItem = target.dataItem as am5.DataItem<am5map.IMapPolygonSeriesDataItem> | undefined;
        if (dataItem) {
          if (previousPolygon && previousPolygon !== target) {
            previousPolygon.set("active", false);
          }
          if (target.get("active")) {
            polygonSeries.zoomToDataItem(dataItem);  // Verificación de dataItem
          } else {
            chart.goHome();
          }
          previousPolygon = target;
        }
      }
    });
  }

      // // Verificar explícitamente que chart.chartContainer está definido
      // const chartContainer = chart.chartContainer;
      // if (chartContainer) {
      //   chartContainer?.get("background").events.on("click", () => {
      //     chart.goHome();
      //   });
      // }

      // // Animación al cargar
      // chart.appear(1000, 100);

      const datosCircle = {
        labels: [
          'Tabasco',
          'Oaxaca',
          'Veracruz'
        ],
        datasets: [{
          label: 'Mi Grafica',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      // this.chart = new Chart("chart", {
      //   type: 'doughnut' as ChartType, // tipo de la gráfica
      //   data: datosCircle // datos
      // });


    }

  // Limpiar la instancia cuando el componente se destruye
  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }





}
