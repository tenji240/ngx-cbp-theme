import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPRootComponent } from './cbp-root.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CBPProgressModule} from '../progress/progress.module';
import {CBPHeaderModule} from '../header/cbp-header/cbp-header.module';
import {CBPPipesModule} from '../pipes/pipes.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, MatIconModule, BrowserAnimationsModule, FlexLayoutModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule
  ],
  declarations: [CBPRootComponent],
  exports: [
      MatIconModule, BrowserAnimationsModule, FlexLayoutModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule,
      MatDividerModule, CBPRootComponent, CBPProgressModule, CBPHeaderModule, CBPPipesModule
  ]
})
export class CBPRootModule {
    constructor(mdIconRegistry: MatIconRegistry) {
        mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
