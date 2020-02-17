import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {DemoAppComponent} from './demo.component';
import {DemoTypographyComponent} from './demo-typography/demo-typography.component';
import {DemoButtonsModule} from './demo-buttons/demo-buttons.module';
import {DemoAppHeaderModule} from './demo-app-header/demo-app-header.module';
import {HttpClientModule} from '@angular/common/http';

import * as pkg from '../../../../package.json';
import { DemoNotificationsModule } from './demo-notifications/demo-notifications.module';
import {
  CBP_APPLICATIONS_SERVICE,
  CBP_FEEDBACK_SERVICE,
  CBP_USER_SERVICE,
  CBPAppHeaderModule,
  CBPHeaderModule,
  CBPNotificationsModule,
  CBPRootModule,
  MockApplicationsService,
  MockFeedbackService,
  MockUserService
} from 'ngx-cbp-theme';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { DemoHeaderBetaModule } from './demo-header-beta/demo-header-beta.module';
import { DemoTableModule } from './demo-table/demo-table.module';

// NOTE: You don't really need this at the moment
export const KITCHENSINK_APP_VERSION = ( < any > pkg).version;

@NgModule({
  declarations: [
    DemoAppComponent,
    DemoTypographyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatSelectModule,
    CBPRootModule,
    CBPHeaderModule,
    CBPAppHeaderModule,
    CBPNotificationsModule,
    DemoButtonsModule,
    DemoTableModule,
    DemoAppHeaderModule,
    DemoHeaderBetaModule,
    DemoNotificationsModule
  ],
  exports: [
    DemoButtonsModule,
    DemoHeaderBetaModule,
    DemoAppHeaderModule,
    DemoTableModule
  ],
  providers: [
    MockUserService,
    MockApplicationsService,
    MockFeedbackService,
    {
      provide: CBP_USER_SERVICE,
      useExisting: MockUserService
    },
    {
      provide: CBP_FEEDBACK_SERVICE,
      useExisting: MockFeedbackService
    },
    {
      provide: CBP_APPLICATIONS_SERVICE,
      useExisting: MockApplicationsService
    }
  ],
  schemas: [],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {
  constructor(applicationsService: MockApplicationsService, userService: MockUserService) {
    // Handle your SSO login here for now
    userService.loginInProgress = true;
    // set this delay to zero if already loggedIn
    // and implement userService so that getUser() immediately returns subject after login()
    userService.login(2000);
    applicationsService.getCurrentApp().subscribe(currentApp => {
      currentApp.version = `v${KITCHENSINK_APP_VERSION}`;
    });
  }
}
