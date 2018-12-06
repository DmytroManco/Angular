import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(HelloComponent);
    const ref = this.container.createComponent(factory);
    ref.instance.name = 'World!';
    // This leads to memory leaks! Use change detection strategy
    ref.instance.output.subscribe(console.log);
  }

}
