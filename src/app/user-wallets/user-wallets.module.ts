import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserWalletsRoutingModule } from './user-wallets-routing.module';
import { UserWalletsComponent } from './user-wallets.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [UserWalletsComponent],
  imports: [
    CommonModule,
    UserWalletsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FlexLayoutModule,
  ],
})
export class UserWalletsModule {}
