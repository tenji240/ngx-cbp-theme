import {Component} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'demo-app-root, cbp-demo-app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoAppComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  myEvent: any = null;
  myFeedbackAction(): void {
    // console.log('demo::myFeedbackAction implementation');
  }

  myPreferences(): void {
      // console.log('demo::myPreferences implementation');
  }

  change($event: MatSelectChange): void {
    console.log('[DEMO HEADER]', $event);
    this.myEvent = $event.value;
  }

  public activateNotification(): void {
    console.log('success notificaion');
  }
}


