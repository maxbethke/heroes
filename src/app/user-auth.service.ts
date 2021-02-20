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

  logIn(username: string, password: string) {
    if (this.verify(username, password)) {
      this.user = this.getUser(username);
      this.isLoggedIn = true;
      this.messageService.add(`UserAuthService: Logged in as ${username}`);
    } else {
      this.messageService.add(
        `UserAuthService: Failed to log in as ${username}`
      );
    }
  }

  logOut() {
    this.user = {} as User;
    this.isLoggedIn = false;
  }

  private getUser(username): User {
    //Here would be querried for user data. We make Up a user for now.
    let user: User = {
      id: 1,
      name: username
    };

    return user;
  }

  private verify(username: string, password: string) {
    //This function woulde send an HTTP Request to the authentication server.
    //As this is just and example, we just valite the user in any case.
    return true;
  }

  public isAuthenticated(): boolean {
    return tokenNotExpired(AUTH_TOKEN);
  }
}
