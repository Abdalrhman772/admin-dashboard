import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Wrapping all pages inside the layout
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./modules/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./modules/orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '' },
];
