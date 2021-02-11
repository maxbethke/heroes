import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Hero } from "./hero";
import { MessageService } from "./message.service";

const SKILL_TAGS: string[] = [
  "VBA",
  "HTML",
  "CSS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "JS",
  "ESNext",
  "PHP",
  "Magento",
  "Wordpress",
  "Spyker",
  "Angular",
  "AngularJS",
  "JQuery",
  "Vue.js",
  "Symfony",
  "CakePHP",
  "Zend",
  "Business Intelligence",
  "IT Security",
  "ASP.NET",
  "Node.js",
  "Lavavel",
  "Web Design",
  "Excel",
  "MS Office",
  "Getting Coffee",
  "PowerBI",
  "MariaDB",
  "MongoDB",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Big Data",
  "AI",
  "Machine Learning",
  "Data Science",
  "Business Management",
  "Customer Service",
  "SASS",
  "LESS",
  "C++",
  "C",
  "C#",
  ".NET",
  "Python",
  "Robotics",
  "Scrum",
  "Kanban",
  "Project Management",
  "HR",
  "People Services"
];

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
      map((heroes: Hero[]) => {
        heroes.forEach((hero: Hero) => {
          hero.skills = this.getSkills(Math.ceil(Math.random() * 10));
        });
        return heroes;
      }),
      catchError(this.handleError<Hero[]>("getHeroes", []))
    );
  }

  getHero(id): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + "/" + id).pipe(
      tap(_ => {
        this.log("fetched hero " + id);
      }),
      map((hero: Hero) => {
        hero.skills = this.getSkills(Math.ceil(Math.random() * 10));
        return hero;
      }),
      catchError(this.handleError<Hero>("getHero"))
    );
  }

  private getSkills(count: number): string[] {
    let skills: string[] = [];
    let i;

    for (i = 0; i < count; i++) {
      skills.push(this.getRandomSkill());
    }

    return skills;
  }

  private getRandomSkill(): string {
    return SKILL_TAGS[Math.floor(Math.random() * SKILL_TAGS.length)];
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
