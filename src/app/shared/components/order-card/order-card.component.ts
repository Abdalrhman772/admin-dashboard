import { Component, Input } from '@angular/core';
import { Order } from '../../../modules/orders/models/orders.model';

@Component({
  selector: 'app-order-card',
  standalone: false,
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
})
export class OrderCardComponent {
  @Input() order!: Order;
}
