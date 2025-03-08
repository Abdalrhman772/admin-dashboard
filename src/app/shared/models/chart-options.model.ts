import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexDataLabels,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexMarkers,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis?: ApexYAxis;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  colors?: string[];
  fill?: ApexFill;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  title?: ApexTitleSubtitle;
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
  plotOptions?: ApexPlotOptions;
}
