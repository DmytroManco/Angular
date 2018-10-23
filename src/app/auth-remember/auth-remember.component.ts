import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.scss']
})
export class AuthRememberComponent implements OnInit {
  @Output() checkEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCheck(value: boolean) {
    this.checkEmitter.emit(value);
  }
}
