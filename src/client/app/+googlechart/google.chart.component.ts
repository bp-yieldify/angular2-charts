import {Component, ElementRef, Renderer} from '@angular/core';
import {DATA} from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'sd-google-chart',
  templateUrl: 'google.chart.component.html'
})
export class GoogleChartComponent {

  public usageData: any[] = DATA;

  private width: number = 1500;
  private height: number = 500;

  constructor(
    public _element: ElementRef,
    public _renderer: Renderer
  ) {
    this.drawPersonUsageLineChart();
  }

  private drawPersonUsageLineChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'date');
    data.addColumn('number', 'Usage');
    data.addColumn('number', 'Another');
    data.addColumn('number', 'bajoras');

    let dataRows: any = [];
    for (let u of this.usageData) {
      dataRows.push([
        new Date(u[0]),
        u[1],
        u[1] * 5,
        u[1] * 2
      ]);
    }

    data.addRows(dataRows);

    var options: google.visualization.LineChartOptions = {

      enableInteractivity: true,

      curveType: 'function',
      focusTarget: 'category',
      width: this.width,
      height: this.height,

      vAxis: {
        gridlines: {
          color: 'transparent'
        }
      },

      hAxis: {
        gridlines: {
          color: 'transparent'
        }
      },

      lineWidth: 3,

      legend: { position: 'none' }
    };

    var chart = new google.visualization.LineChart(this._element.nativeElement);

    chart.draw(data, options);
  }
}
