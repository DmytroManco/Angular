import { Component, OnInit } from '@angular/core';
import { Subject, zip, combineLatest, forkJoin, withLatestFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  color$ = new Subject<Color>();
  logo$ = new Subject<Logo>();

  constructor() {
  }

  ngOnInit() {
    // zip(this.color$, this.logo$).subscribe(([color, logo]) => console.log(`${color} shit with ${logo}`));
    // combineLatest(this.color$, this.logo$).subscribe(([color, logo]) => console.log(`${color} shit with ${logo}`));
    // this.color$.pipe(
    //   withLatestFrom(this.logo$)
    // ).subscribe(([color, logo]) => console.log(`${color} shit with ${logo}`));
    forkJoin(this.color$, this.logo$).subscribe(([color, logo]) => console.log(`${color} shit with ${logo}`));

    this.color$.next('white');
    this.logo$.next('fish');
    this.color$.next('green');
    this.logo$.next('dog');
    this.color$.next('red');
    this.logo$.next('bird');
    this.color$.next('blue');

    this.color$.complete();
    this.logo$.complete();
  }

}

type Color = 'white' | 'green' | 'red' | 'blue';
type Logo = 'fish' | 'dog' | 'bird' | 'cow';
