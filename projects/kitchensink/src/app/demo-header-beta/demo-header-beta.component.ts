import {
  Component,
  OnInit,
  HostListener,
  NgZone
} from '@angular/core';
import {
  MatSelectChange,
  matSelectAnimations
} from '@angular/material/select';
import {
  CBPScrollShrinkAnimator,
  CBPToolbarState
} from '../../../../../dist/ngx-cbp-theme';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'demo-header-beta, header-beta',
  templateUrl: './demo-header-beta.component.html',
  styleUrls: ['./demo-header-beta.component.scss'],
  animations: [
    CBPScrollShrinkAnimator.createScrollShrinkTrigger('cbpToolbarScrollState', '0px', '-50px'),
    matSelectAnimations.fadeInContent
  ]
})
export class DemoHeaderBetaComponent implements OnInit {
  public cbpToolbarScrollState: 'up' | 'initial';
  public toolbarState: CBPToolbarState;
  constructor(protected ngZone: NgZone) {
    this.toolbarState = new CBPToolbarState();
  }
  foods: Food[] = [{
      value: 'steak-0',
      viewValue: 'Steak'
    },
    {
      value: 'pizza-1',
      viewValue: 'Pizza'
    },
    {
      value: 'tacos-2',
      viewValue: 'Tacos'
    }
  ];

  change($event: MatSelectChange): void {
    console.log('[DEMO HEADER]', $event);
  }

  public ngOnInit(): void {
    this.cbpToolbarScrollState = 'initial';
  }

  @HostListener('window:scroll', ['$event'])
  public scrolled($event: any): void {
    this.ngZone.run(() => {
      this.cbpToolbarScrollState = window.pageYOffset <= 50 ? 'initial' : 'up';
      this.toolbarState.scrollState.next(this.cbpToolbarScrollState);
    });
  }
}
