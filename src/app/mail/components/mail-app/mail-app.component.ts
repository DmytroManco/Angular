import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet (activateEvents)="onActivate($event)" (deactivateEvents)="onDeactivate($event)">
      </router-outlet>
    </div>
  `
})
export class MailAppComponent {
  onActivate($event) {
    console.log('activate', $event);
  }

  onDeactivate($event) {
    console.log('deactivate', $event);
  }
}
