import { Component, OnInit } from '@angular/core';

import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  constructor(user: UserAuthService) { }

  ngOnInit() {
  }

}