import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoButtonsComponent } from './demo-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CBPButtonsModule } from 'ngx-cbp-theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    CBPButtonsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  exports: [
    DemoButtonsComponent,
    MatButtonModule
  ],
  declarations: [DemoButtonsComponent]
})
export class DemoButtonsModule {}
