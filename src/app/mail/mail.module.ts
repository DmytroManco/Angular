import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailService } from './mail.service';
import { MailFolderResolver } from './containers/mail-folder.resolver';
import { MailViewComponent } from './components/mail-view/mail-view.component';

export const ROUTES: Routes = [
  {
    path: 'folder/:name',
    component: MailFolderComponent,
    resolve: {
      messages: MailFolderResolver,
    }
  },
  {
    path: 'message/:id',
    component: MailViewComponent,
    outlet: 'pane'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    MailFolderComponent,
    MailItemComponent,
    MailAppComponent,
    MailViewComponent,
  ],
  providers: [
    MailService,
    MailFolderResolver,
  ],
  exports: [
    MailAppComponent,
  ],
})
export class MailModule {
}
