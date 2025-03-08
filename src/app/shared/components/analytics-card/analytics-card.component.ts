import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  standalone: false,
  templateUrl: './analytics-card.component.html',
  styleUrl: './analytics-card.component.scss',
})
export class AnalyticsCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string;
  @Input() percentage!: string;
  @Input() isPositive!: boolean;
}
