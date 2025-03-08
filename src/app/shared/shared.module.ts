import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AnalyticsCardComponent } from './components/analytics-card/analytics-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { OrderCardComponent } from './components/order-card/order-card.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    AnalyticsCardComponent,
    ChartComponent,
    TableComponent,
    OrderCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    NgApexchartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
  ],
  exports: [AnalyticsCardComponent, ChartComponent, TableComponent, OrderCardComponent],
})
export class SharedModule {}
