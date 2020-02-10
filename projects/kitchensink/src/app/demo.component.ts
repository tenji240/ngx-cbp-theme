import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'demo-app-root, cbp-demo-app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    console.log('demo::myPreferences implementation');
  }
}


