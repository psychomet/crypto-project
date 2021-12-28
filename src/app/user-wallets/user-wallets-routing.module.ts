import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserWalletsComponent } from './user-wallets.component';

const routes: Routes = [{ path: '', component: UserWalletsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserWalletsRoutingModule {}
