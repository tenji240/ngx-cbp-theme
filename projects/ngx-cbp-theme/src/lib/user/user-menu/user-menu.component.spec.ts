import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import {
  CBPToolbarState,
  CBP_HEADER_STATE
} from '../../header/cbp-toolbar/cbp-toolbar-state';
import { CBPUserMenuComponent } from './user-menu.component';
import { CBPProgressModule } from '../../progress/progress.module';
import { CBP_USER_SERVICE } from '../user';
import { MockUserService} from '../../mock-services/user.mock.service';

describe('CBPUserMenuComponent', () => {
  let component: CBPUserMenuComponent;
  let fixture: ComponentFixture<CBPUserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CBPUserMenuComponent
      ],
      imports: [
        CBPProgressModule,
        MatIconModule,
        MatMenuModule
      ],
      providers: [
          { provide: CBP_USER_SERVICE, useClass: MockUserService },
          { provide: CBP_HEADER_STATE, useClass: CBPToolbarState }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBPUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
