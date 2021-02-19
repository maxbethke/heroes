import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { UserAuthService } from "./user-auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public userAuthService: UserAuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.userAuthService.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
