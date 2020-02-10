import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAppHeaderComponent } from './demo-app-header.component';
import { CBPAppHeaderModule} from 'ngx-cbp-theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  imports: [
    CommonModule,
    CBPAppHeaderModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule
  ],
  declarations: [DemoAppHeaderComponent],
  exports: [DemoAppHeaderComponent]
})
export class DemoAppHeaderModule { }
