import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerComponent } from '@core/components';
import { AuthenticationGuard } from '@core/guards';

const routes: Routes = [
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: DrawerComponent,
    canActivate: [AuthenticationGuard],
    data: {
      redirectTo: '/auth/login',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./user-wallets/user-wallets.module').then(
            (m) => m.UserWalletsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
