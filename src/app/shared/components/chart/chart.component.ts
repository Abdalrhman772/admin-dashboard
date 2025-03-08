import { Component, Input } from '@angular/core';
import { ChartOptions } from '../../models/chart-options.model';

@Component({
  selector: 'app-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @Input() chartOptions!: ChartOptions;
}
