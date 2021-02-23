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
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => {
        this.log("fetched heroes");
      }),
      map((heroes: Hero[]) => this.mutateHeroes(heroes, heroes => this.addSkillsToHero(heroes))),
      map((heroes: Hero[]) => this.mutateHeroes(heroes, heroes => this.splitName(heroes))),
      catchError(this.handleError<Hero[]>("getHeroes", []))
    );
  }
}
