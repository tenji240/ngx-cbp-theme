import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { DemoHeaderBetaComponent } from './demo-header-beta.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatMenuModule,
    MatToolbarModule
  ],
  declarations: [
    DemoHeaderBetaComponent
  ],
  exports: [
    DemoHeaderBetaComponent
  ]
})
export class DemoHeaderBetaModule { }
