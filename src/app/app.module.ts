import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth/auth.message';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthRememberComponent,
    AuthMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  entryComponents: [
    AuthComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
