import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CBPToolbarModule} from '../cbp-toolbar/cbp-toolbar.module';
import {CBPAppHeaderComponent} from './app-header.component';
import {APP_HEADER_STATE, CBPToolbarState} from '../cbp-toolbar/cbp-toolbar-state';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    CBPToolbarModule
  ],
  declarations: [CBPAppHeaderComponent],
  exports: [CBPAppHeaderComponent],
  providers: [{provide: APP_HEADER_STATE, useClass: CBPToolbarState}]
})
export class CBPAppHeaderModule {}
