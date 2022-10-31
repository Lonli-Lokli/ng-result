import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-ng-result';

  constructor(public svc: AppService) {}
  onStartSuccess() {
    this.svc.ok();
  }

  onStartFailure() {
    this.svc.notOk();
  }
}
