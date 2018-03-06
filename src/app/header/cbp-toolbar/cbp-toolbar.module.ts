import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPToolbarComponent } from './cbp-toolbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CBPToolbarStateChange} from './cbp-toolbar-state.service';

@NgModule({
  imports: [
    CommonModule, FlexLayoutModule, BrowserAnimationsModule
  ],
  declarations: [CBPToolbarComponent],
  exports: [CBPToolbarComponent],
  providers: [CBPToolbarStateChange]
})
export class CBPToolbarModule { }
