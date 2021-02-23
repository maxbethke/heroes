import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { Skill } from "./skill.enum"

@Injectable({
  providedIn: "root"
})
export class HeroService {
  private heroesUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => {
        this.log("fetched heroes");
      }),
      map((heroes: Hero[]) => this.mutateHeroes(heroes, heroes => this.addSkillsToHero(heroes))),
      map((heroes: Hero[]) => this.mutateHeroes(heroes, heroes => this.splitName(heroes))),
      catchError(this.handleError<Hero[]>("getHeroes", []))
    );
  }

  getHero(id): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + "/" + id).pipe(
      tap(_ => {
        this.log("fetched hero " + id);
      }),
      map((hero: Hero) => this.addSkillsToHero(hero)),
      map((hero: Hero) => this.splitName(hero)),
      catchError(this.handleError<Hero>("getHero"))
    );
  }

  private mutateHeroes(heroes: Hero[], mutator) {
    heroes.forEach((hero: Hero) => {
      hero = mutator(hero);
    });
    return heroes;
  }

  private splitName(hero: Hero) {
    let heroNames: string[] = hero.name.split(" ");

    hero.firstname = heroNames.splice(0, 1).join(" ");
    hero.lastname = heroNames.splice(heroNames.length - 1, 1).join(" ");
    hero.middlename = heroNames.join(" ");

    return hero;
  }

  private addSkillsToHero(hero: Hero) {
    hero.skills = this.getSkills(Math.ceil(Math.random() * 10));
    return hero;
  }

  private getSkills(count: number): string[] {
    let skills: string[] = [];

    for (let i = 0; i < count; i++) {
      skills.push(this.getRandomSkill());
    }

    return skills;
  }

  private getRandomSkill(): string {
    return Skill[Math.floor(Math.random() * Object.keys(Skill).length)];
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
