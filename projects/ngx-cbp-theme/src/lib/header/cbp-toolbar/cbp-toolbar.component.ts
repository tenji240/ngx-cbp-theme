import {
  Component, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import {CBPScrollShrinkAnimator} from './cbp-scrollshrink-animator';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {fadeInContent} from '@angular/material';
import {CBPToolbarState} from './cbp-toolbar-state';

@Component({
  selector: 'cbp-toolbar',
  templateUrl: './cbp-toolbar.component.html',
  styleUrls: ['./cbp-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarScrollState', '*', '-50px'),
    fadeInContent
  ],
  exportAs: 'cbpToolbar'
})
export class CBPToolbarComponent implements OnInit, OnDestroy {


  @Output() cbpToolbarScrollState: 'up' | 'initial';

  private mediaSubscription: Subscription;


  @Input() position: number;
  @HostBinding('attr.role') role = 'toolbar';

  @Input() toolbarState: CBPToolbarState;
  @Output() hideToolbarItem: EventEmitter<any> = new EventEmitter();


  set isToolbarExpanded(expanded: boolean) {
    this.toolbarState.toolbarIsExpanded.next(expanded);
  }

  get isToolbarExpanded(): boolean {
    return this.toolbarState.toolbarIsExpanded.getValue();
  }

  set hasToolbarMenu(has: boolean) {
    this.toolbarState.hasToolbarMenu.next(has);
  }

  constructor(private media: ObservableMedia) {
  }

  ngOnInit() {
    this.cbpToolbarScrollState = 'initial';
    this.mediaSubscription = this.media.subscribe(
      (change: MediaChange) => {
        if (change.mqAlias !== 'xs') {
          this.isToolbarExpanded = false;
          this.hasToolbarMenu = false;
        } else {
          this.hasToolbarMenu = true;
        }
      }
    );
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }

  @HostListener('window:scroll', ['$event'])
  scrolled($event: any) {
    if (!this.toolbarState.scrollShrinkSuspended) {
      this.cbpToolbarScrollState = window.pageYOffset <= 50 ? 'initial' : 'up';
      this.toolbarState.scrollState.next(this.cbpToolbarScrollState);
      this.isToolbarExpanded = false;
    }
  }

  getToolbarExpansionPanelTop(): string {
    return this.toolbarState.scrollState.getValue() === 'initial' ? '98px' : '50px';
  }
}