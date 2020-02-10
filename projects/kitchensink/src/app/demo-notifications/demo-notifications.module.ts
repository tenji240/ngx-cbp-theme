import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNotificationsComponent } from './demo-notifications.component';
import {CBPNotificationsModule} from 'ngx-cbp-theme';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, CBPNotificationsModule, MatIconModule,
    FlexLayoutModule
  ],
  declarations: [DemoNotificationsComponent],
  exports: [DemoNotificationsComponent]
})
export class DemoNotificationsModule { }
