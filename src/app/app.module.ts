import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MailModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
