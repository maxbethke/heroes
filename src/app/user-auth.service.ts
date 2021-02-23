import { Injectable } from "@angular/core";
import { tokenNotExpired } from 'angular2-jwt';

import { MessageService } from "./message.service";
import { User } from "./user";

const AUTH_TOKEN = "heroes-hr_auth-token"

@Injectable({
  providedIn: "root"
})
export class UserAuthService {
  user: User;
  isLoggedIn: boolean = false;

  constructor(
    private messageService: MessageService,
  ) {}
}
