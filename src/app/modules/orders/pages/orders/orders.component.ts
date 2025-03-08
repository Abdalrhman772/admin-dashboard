import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../../dashboard/services/dashboard.service';
import { Order } from '../../models/orders.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  private subscription!: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private fetchOrders(): void {
    this.subscription = this.dashboardService.getOrders().subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error('Error fetching orders:', err),
    });
  }
}