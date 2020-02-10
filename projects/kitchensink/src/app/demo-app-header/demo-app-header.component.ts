import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { APP_HEADER_STATE, CBPToolbarState } from 'ngx-cbp-theme';

@Component({
  selector: 'cbp-demo-demo-app-header, demo-demo-app-header',
  templateUrl: './demo-app-header.component.html',
  styleUrls: ['./demo-app-header.component.scss']
})
export class DemoAppHeaderComponent implements OnInit {

  appNavigations = [
    {name: 'Info'},
    {name: 'Findings'},
    {name: 'Attachments'},
    {name: 'Results'},
    {name: 'Some'},
    {name: 'More'},
    {name: 'Items'},
    {name: 'Remarks'},
    {name: 'History'},
    {name: 'Notes'},
    {name: 'Ideas'}];

  constructor() {
  }

  companyName = 'Nicholas Trading Company';

  constructor(@Inject(APP_HEADER_STATE) public toolbarState: CBPToolbarState) {}

  ngOnInit() {}

}
