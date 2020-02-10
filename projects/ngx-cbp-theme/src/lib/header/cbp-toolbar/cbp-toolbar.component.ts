import {Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink-animator';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import { matSelectAnimations } from '@angular/material/select';
import {CBPToolbarState} from './cbp-toolbar-state';

@Component({
  selector: 'cbp-toolbar',
  templateUrl: './cbp-toolbar.component.html',
  styleUrls: ['./cbp-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarScrollState', '*', '-50px'),
    matSelectAnimations.fadeInContent
  ],
  exportAs: 'cbpToolbar'
})
export class CBPToolbarComponent implements OnInit, OnDestroy {


  @Output() cbpToolbarScrollState: 'up' | 'initial';

  private _subscription = new Subscription();


  @Input() position: number;
  @HostBinding('attr.role') role = 'toolbar';

  @Input() toolbarState: CBPToolbarState;
  @Output() hideToolbarItem: EventEmitter<any> = new EventEmitter();


  set isToolbarExpanded(expanded: boolean) {
    if (this.toolbarState) {
      // console.log('setting toolbar state:: ', this.toolbarState, expanded);
      this.toolbarState.toolbarIsExpanded.next(expanded);
    }
  }

  get isToolbarExpanded(): boolean {
    // console.log('getting toolbar state:: ', this.toolbarState);
    return this.toolbarState ? this.toolbarState.toolbarIsExpanded.value : false;
  }

  set hasToolbarMenu(has: boolean) {
    this.toolbarState.hasToolbarMenu.next(has);
  }

  constructor(private mediaObserver: MediaObserver) {
  }

  ngOnInit() {
    this.cbpToolbarScrollState = 'initial';
    this._subscription.add(this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        if (change.mqAlias !== 'xs') {
          this.isToolbarExpanded = false;
          this.hasToolbarMenu = false;
        } else {
          this.hasToolbarMenu = true;
        }
      }
    ));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  scrolled($event: any) {
    // console.log('XXXX SCROLL LOG:: ', $event, this.toolbarState);
    if (this.toolbarState && !this.toolbarState.scrollShrinkSuspended) {
      this.cbpToolbarScrollState = window.pageYOffset <= 50 ? 'initial' : 'up';
      this.toolbarState.scrollState.next(this.cbpToolbarScrollState);
      this.isToolbarExpanded = false;
    }
  }

  getToolbarExpansionPanelTop(): string {
    return this.toolbarState.scrollState.getValue() === 'initial' ? '98px' : '50px';
  }
}
