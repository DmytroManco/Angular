import { Component, OnInit } from '@angular/core';
import { Mail } from '../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ title$ | async }}</h2>
    <app-mail-item
      *ngFor="let message of messages$ | async"
      [message]="message">
    </app-mail-item>
  `
})
export class MailFolderComponent implements OnInit {
  messages$ = this.route.data.pipe(pluck('messages'));
  title$: Observable<string> = this.route.params.pipe(pluck('name'));
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }
}
