import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a [routerLink]="['', { outlets: {pane: ['message', message.id]} }]"
       routerLinkActive="active"
       class="mail-item">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
    <button (click)="navigateToLetter()">Navigate to Letter</button>
  `
})
export class MailItemComponent {
  @Input()
  message: Mail;

  constructor(private router: Router) {
  }


  navigateToLetter() {
    this.router.navigate(['', {outlets: {pane: ['message', this.message.id]}}]);
  }
}
