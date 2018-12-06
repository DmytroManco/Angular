import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    HelloComponent,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
