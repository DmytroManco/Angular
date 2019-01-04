import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MailService } from '../../mail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <div>
        {{(massage$ | async).summary}}
      </div>
      <div>
        {{(massage$ | async).from}}
      </div>
    </div>
  `
})
export class MailViewComponent implements OnInit {
  massage$: Observable<Mail>;

  constructor(private route: ActivatedRoute,
              private mailService: MailService) {
  }

  ngOnInit() {
    this.massage$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id: number = parseInt(params.get('id'), 10);

        return this.mailService.getMassage(id);
      })
    );
  }
}
