import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Order } from '../../orders/models/orders.model';
import { ChartData } from '../../reports/models/chart.model';
import { AnalyticsCard } from '../models/analytical-card.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly apiUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  getAnalyticsCards(): Observable<AnalyticsCard[]> {
    return this.http.get<AnalyticsCard[]>(`${this.apiUrl}/analyticsCards`);
  }

  getLineChart(): Observable<ChartData> {
    return this.http.get<ChartData>(`${this.apiUrl}/lineChart`);
  }

  getBarChart(): Observable<ChartData> {
    return this.http.get<ChartData>(`${this.apiUrl}/barChart`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/orders/${id}`);
  }
}
