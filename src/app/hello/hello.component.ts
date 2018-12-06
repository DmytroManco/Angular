import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  _name;

  @Input() set name(name: string) {
    this._name = name;
  }

  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.output.emit(1);
  }

  get name() {
    return this._name;
  }
}
