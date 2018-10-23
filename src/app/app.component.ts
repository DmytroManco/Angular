import { AfterViewInit, AfterContentInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthComponent } from './auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  subject: BehaviorSubject<number> = new BehaviorSubject(NaN);
  stream1$: Observable<number>;
  stream2$: Observable<number>;

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  auth(user) {
    console.log(user);
  }

  ngOnInit() {
    this.subject.next(1);
    this.stream1$ = this.subject.asObservable();
    this.stream2$ = this.subject.asObservable();
  }

  ngAfterContentInit() {
    const authFactory = this.resolver.resolveComponentFactory(AuthComponent);
    const component = this.entry.createComponent(authFactory);
  }

  logStream(stream: Observable<number>) {
    stream.subscribe(console.log);
  }

  changeValue() {
    const random = Math.random();
    this.subject.next(random);
  }

  rememberUser(checked: boolean) {
    console.log('App Component', checked);
  }
}
