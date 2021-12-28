import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatErrorMessagesComponent } from './mat-error-messages.component';

@NgModule({
  declarations: [MatErrorMessagesComponent],
  exports: [MatErrorMessagesComponent],
  imports: [CommonModule],
})
export class MatErrorMessagesModule {}
