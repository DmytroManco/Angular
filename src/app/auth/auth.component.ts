import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
  AfterViewInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ElementRef,
  ChangeDetectorRef,
  Renderer2,
} from '@angular/core';

import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth.message';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterContentInit, AfterViewInit {
  showMsg: boolean;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @ViewChildren(AuthMessageComponent) msgRef: QueryList<AuthMessageComponent>;
  @ViewChild('email') email: ElementRef;
  @Output() formEmitter: EventEmitter<any> = new EventEmitter();
  user = {email: '', password: ''};

  constructor(
    private renderer: Renderer2,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach(item => {
        item.checkEmitter.subscribe(checked => this.showMsg = checked);
      });
    }
  }

  ngAfterViewInit() {
    if (this.msgRef) {
      this.msgRef.forEach((component) => component.days = 20);
      this.cd.detectChanges();
    }
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'enterEmail');
  }

  onSubmited() {
    this.formEmitter.emit(this.user);
  }
}
