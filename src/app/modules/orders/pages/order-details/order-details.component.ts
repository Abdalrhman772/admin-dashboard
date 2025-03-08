import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../dashboard/services/dashboard.service';
import { Order } from '../../models/orders.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-order-details',
  standalone: false,
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent implements OnInit, OnDestroy {
  order!: Order;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.loadOrderDetails();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadOrderDetails(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (!orderId) {
      return;
    }

    this.dashboardService
      .getOrderById(Number(orderId))
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.order = data;
        },
        error: (err) => {
          console.error('Error fetching order:', err);
        },
      });
  }
}
