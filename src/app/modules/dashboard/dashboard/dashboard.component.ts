import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Order } from '../../orders/models/orders.model';
import { AnalyticsCard } from '../models/analytical-card.model';
import { ChartOptions } from '../../../shared/models/chart-options.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  columns = [
    { field: 'image', header: 'Item Name', type: 'image' },
    { field: 'name', header: 'Product Name' },
    { field: 'qty', header: 'Qty' },
    { field: 'date', header: 'Order Date' },
    { field: 'amount', header: 'Amount' },
    { field: 'status', header: 'Status', type: 'badge' },
  ];
  analyticsCards: AnalyticsCard[] = [];
  lineChartOptions!: ChartOptions;
  barChartOptions!: ChartOptions;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchAnalyticsCards();
    this.fetchLineChart();
    this.fetchBarChart();
    this.fetchOrders();
  }

  private initializeLineChart(data: any): void {
    this.lineChartOptions = {
      series: data.series,
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false },
      },
      title: {
        text: 'Report',
        align: 'left',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: 'League Spartan',
          color: '#333',
        },
      },
      xaxis: {
        categories: data.categories,
        labels: { style: { colors: '#888', fontSize: '12px' } },
      },
      yaxis: {
        labels: {
          formatter: (val: any) => `${(val / 1000).toFixed(0)}k`,
          style: { colors: '#888', fontSize: '12px' },
        },
      },
      stroke: { curve: 'straight', width: 3 },
      colors: ['#1E88E5'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100],
        },
      },
      markers: {
        size: 5,
        colors: ['#1E88E5'],
        strokeColors: '#fff',
        strokeWidth: 3,
      },
      tooltip: {
        enabled: true,
        theme: 'light',
        style: { fontSize: '12px' },
        y: { formatter: (val: any) => `${val.toLocaleString()}` },
        marker: { show: false },
      },
      grid: { borderColor: '#e0e0e0', strokeDashArray: 5 },
      dataLabels: {
        enabled: false,
      },
    };
  }

  private initializeBarChart(data: any): void {
    this.barChartOptions = {
      series: data.series,
      chart: {
        type: 'bar',
        height: 350,
        toolbar: { show: false },
      },
      title: {
        text: 'Visits',
        align: 'left',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
          fontFamily: 'League Spartan',
          color: '#333',
        },
      },
      xaxis: {
        categories: data.categories,
        labels: { style: { colors: '#888', fontSize: '12px' } },
      },
      yaxis: {
        show: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          borderRadius: 8,
          borderRadiusApplication: 'end',
          dataLabels: {
            position: 'top',
          },
        },
      },
      colors: ['#0662FD'],
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
    };
  }

  private fetchAnalyticsCards(): void {
    this.dashboardService.getAnalyticsCards().subscribe({
      next: (data) => (this.analyticsCards = data),
      error: (err) => console.error('Error fetching analytics cards:', err),
    });
  }

  private fetchLineChart(): void {
    this.dashboardService.getLineChart().subscribe({
      next: (data) => this.initializeLineChart(data),
      error: (err) => console.error('Error fetching line chart:', err),
    });
  }

  private fetchBarChart(): void {
    this.dashboardService.getBarChart().subscribe({
      next: (data) => this.initializeBarChart(data),
      error: (err) => console.error('Error fetching bar chart:', err),
    });
  }

  private fetchOrders(): void {
    this.dashboardService.getOrders().subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error('Error fetching orders:', err),
    });
  }
}
