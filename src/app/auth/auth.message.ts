import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div>
      Your are log in for {{days}} days!
    </div>`,
  styleUrls: ['./auth.component.scss']
})
export class AuthMessageComponent implements OnInit, AfterContentInit {
  days = 7;

  ngOnInit() {
  }
  ngAfterContentInit() {}
}
