import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { UserAuthService } from "./user-auth.service";
import { MessageService } from "./message.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private userAuthService: UserAuthService,
    private message: MessageService,
    private router: Router
  ) {}

  canActivate() {
    if (true) {
      this.message.add("AuthGuard: Accessed");
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }
}
