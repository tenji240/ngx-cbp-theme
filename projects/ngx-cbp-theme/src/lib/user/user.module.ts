import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

import { CBPUserMenuComponent } from './user-menu/user-menu.component';
import { CBPProgressModule } from '../progress/progress.module';

@NgModule({
  imports: [
      CommonModule,
      CBPProgressModule,
      FlexLayoutModule,
      MatBadgeModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatMenuModule
  ],
  exports: [
    CBPUserMenuComponent,
    MatMenuModule
  ],
  declarations: [
    CBPUserMenuComponent
  ]
})
export class CBPUserModule {
}
