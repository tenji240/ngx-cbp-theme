import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Input
} from '@angular/core';
import {
  CBP_USER_SERVICE,
  CBPUser,
  CBPUserService
} from '../user';
import { Subscription } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import {
  CBPToolbarState,
  CBP_HEADER_STATE
} from '../../header/cbp-toolbar/cbp-toolbar-state';

@Component({
  selector: 'cbp-user-menu, [cbp-user-menu], .cbp-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CBPUserMenuComponent implements OnInit, OnDestroy {
  @Input() set customMenuToggleEvent(e: any) { // input setter to trigger a menu toggle
    if (e !== null && this.userMenuTrigger) {
      this.toggleMenu(null);
    }
  }
  @Input() cbpNotificationsCount: number; // Number of notifications Count consumed by the header
  @Input() notificationClick: () => any; // takes in a function cal/
  @ViewChild(MatMenuTrigger, {static: false}) userMenuTrigger: MatMenuTrigger;

  public userMenuExpanded = false;
  public user: CBPUser;
  public isLoggedIn = false;
  public userDataLoaded = false;
  public error: any;
  private subscriptions = new Subscription();

  get toolbarIsExpanded(): boolean {
    return this.toolbarState.toolbarIsExpanded.getValue();
  }

  constructor(@Inject(CBP_USER_SERVICE) private userService: CBPUserService,
              @Inject(CBP_HEADER_STATE) public toolbarState: CBPToolbarState) {
  }


  get loginProgress(): boolean {
    return this.userService.loginInProgress;
  }

  set loginProgress(progress: boolean) {
    this.userService.loginInProgress = progress;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.toolbarState.hasToolbarMenu.subscribe(() => {
      if (this.userMenuTrigger && this.userMenuTrigger.menu) {
        this.userMenuExpanded = false;
        this.userMenuTrigger.closeMenu();
      }
    }));

    this.subscriptions.add(this.userService.getUser().subscribe({
      next: (data: CBPUser) => {
        if (data) {
          this.user = data;
          this.userDataLoaded = true;
          this.loginProgress = false;
          this.isLoggedIn = true;
        } else {
          this.loginProgress = false;
          this.isLoggedIn = false;
          this.user = data;
          this.userDataLoaded = false;
        }
      },
      error: (err: any) => {
        this.loginProgress = false;
        this.isLoggedIn = false;
        this.error = err;
        this.userDataLoaded = false;
      }
    }));

    this.subscriptions.add(this.toolbarState.scrollState.subscribe((value) => {
      if (value === 'up') {
        this.userMenuTrigger.closeMenu();
      }
    }));

  }

  public login($event: any): void {
    this.loginProgress = true;
    this.isLoggedIn = false;
    this.userService.login();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.user = undefined;
    this.userDataLoaded = false;
  }

  public logout(): void {
    this.isLoggedIn = false;
    this.userService.logout();
    this.userMenuExpanded = false;
  }

  public displayUserBar(): string {
    return this.user ?
      `${this.user.firstName} ${this.user.lastName}
       ${this.user.carrierCode ? this.user.carrierCode : ''}  ${this.user.shippingCompany ? this.user.shippingCompany : ''}` :
       'Loading User';
  }

  public toggleMenu($event: Event): void {
    if (!this.isLoggedIn || !this.userDataLoaded) {
      return;
    }
    if (this.toolbarState && this.toolbarState.toolbarIsExpanded.value) {
      this.userMenuExpanded = !this.userMenuExpanded;
      if ($event) {
        $event.stopPropagation();
      }
    } else {
      if (this.userMenuTrigger) {
        this.userMenuTrigger.toggleMenu();
      }
    }
  }

}
