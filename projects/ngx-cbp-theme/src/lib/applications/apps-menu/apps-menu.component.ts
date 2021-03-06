import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatMenuTrigger } from '@angular/material';
import { CBP_APPLICATIONS_SERVICE, CBPApplication, CBPApplicationsData, CBPApplicationsService } from '../cbp-applications-service';
import { CBP_HEADER_STATE, CBPToolbarState } from '../../header/cbp-toolbar/cbp-toolbar-state';
import { first } from 'rxjs/operators';

@Component({
  selector: 'cbp-apps-menu',
  templateUrl: './apps-menu.component.html',
  styleUrls: ['./apps-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  entryComponents: []
})
export class CBPApplicationsMenuComponent implements OnInit, OnDestroy {

  menuDataLoaded = false;
  applicationsDataLoading = true;
  isApplicationsExpanded = false;
  applicationsData ?: CBPApplicationsData;
  private subscriptions = new Subscription();

  @ViewChild(MatMenuTrigger, null) cbpMenuTrigger: MatMenuTrigger;

  public error: any;

  constructor(public _cdr: ChangeDetectorRef,
              @Inject(CBP_APPLICATIONS_SERVICE) public applicationsService: CBPApplicationsService,
              @Inject(CBP_HEADER_STATE) private toolbarState: CBPToolbarState) {
  }

  get toolbarIsExpanded(): boolean {
    return this.toolbarState.toolbarIsExpanded.getValue();
  }

  ngOnInit() {
    this.subscriptions.add(this.toolbarState.hasToolbarMenu.subscribe(() => {
      if (this.cbpMenuTrigger && this.cbpMenuTrigger.menu) {
        this.isApplicationsExpanded = false;
        this.cbpMenuTrigger.closeMenu();
        this._cdr.markForCheck();
      }
    }));

    if (this.applicationsService) {
      this.subscriptions.add(this.applicationsService.getApplicationsData()
        .subscribe(
          (data: CBPApplicationsData) => {
            this.applicationsData = data;
            if (data) {
              this.menuDataLoaded = true;
              this.applicationsDataLoading = false;
            }
            this._cdr.markForCheck();
          },
          (err) => {
            this.error = err;
            this.applicationsDataLoading = false;
            console.log(err);
            this._cdr.markForCheck();
          }));
    }
    this.subscriptions.add(this.toolbarState.scrollState.subscribe((value) => {
      if (value === 'up') {
        this._cdr.markForCheck();
        this.cbpMenuTrigger.closeMenu();
      }
    }));
  }

  /**
   * TODO: Re-enable clear button on the component
   * Removes a CBP from the recents section in the apps-menu
   * @param app - a CBP Application in the dropdown
   * @param $event - a click event
   */
  removeFromRecent(app: CBPApplication, $event: any) {
    this.applicationsService.removeRecentApplication(app);
    $event.stopPropagation();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  /**
   * reloads the apps menu
   * @param $event - a click event
   */
  reloadApplicationsData($event: Event): void {
    this.applicationsDataLoading = true;
    this._cdr.markForCheck();
    this.applicationsService.refresh().pipe(first()).subscribe(() => {
      this.applicationsDataLoading = false;
      console.log('this.applicationsDataLoading', this.applicationsDataLoading);
      this._cdr.markForCheck();
    });

    $event.stopPropagation();
  }

  /**
   * returns the url of the CBP apps page. this is provided by the apps service
   */
  getApplicationsDirectoryUrl(): string {
    return this.applicationsService.getApplicationsDirectoryUrl();
  }

  /**
   * toggles the apps menu
   * @param $event - a clickable event
   */
  toggleApplicationsMenu($event: Event) {
    if (this.toolbarState.toolbarIsExpanded.getValue()) {
      this.isApplicationsExpanded = !this.isApplicationsExpanded;
      $event.stopPropagation();
    } else {
      if (this.cbpMenuTrigger) {
        // console.log(this.cbpMenuTrigger);
        this.cbpMenuTrigger.toggleMenu();
      }
    }
  }

  /**
   * TODO: find a way to share this
   * used in the toggleApplicationMenu
   * @param $event - click event
   */
  stopPropogation($event: Event) {
    $event.stopPropagation();
  }
}
