import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBPApplicationsMenuComponent } from './apps-menu/apps-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { CBPProgressModule } from '../progress/progress.module';
import { CBPPipesModule } from '../pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { CBPApplicationsSearchComponent } from './applications-search/applications-search.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    CBPProgressModule,
    CBPPipesModule,
    MatButtonModule
  ],
  declarations: [
    CBPApplicationsMenuComponent,
    CBPApplicationsSearchComponent
  ],
  exports: [
    CBPApplicationsMenuComponent,
    CBPApplicationsSearchComponent
  ]
})
export class CBPApplicationsModule { }
