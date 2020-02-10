import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import { DemoTableComponent } from './demo-table.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    DemoTableComponent
  ],
  declarations: [DemoTableComponent]
})
export class DemoTableModule {}
