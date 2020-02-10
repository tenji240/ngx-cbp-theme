import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { DemoAppHeaderComponent } from './demo-app-header.component';
import { CommonModule } from '@angular/common';
import { CBPAppHeaderModule } from 'ngx-cbp-theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

describe('DemoAppHeaderComponent', () => {
  let component: DemoAppHeaderComponent;
  let fixture: ComponentFixture < DemoAppHeaderComponent > ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          CommonModule,
          CBPAppHeaderModule,
          MatIconModule,
          MatTabsModule,
          FlexLayoutModule,
          NoopAnimationsModule,
          MatMenuModule
        ],
        declarations: [DemoAppHeaderComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
