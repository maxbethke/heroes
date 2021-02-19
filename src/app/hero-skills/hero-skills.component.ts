import { Component, OnInit, Input } from "@angular/core";

import { Hero } from "../hero";

@Component({
  selector: "app-hero-skills",
  templateUrl: "./hero-skills.component.html",
  styleUrls: ["./hero-skills.component.css"]
})
export class HeroSkillsComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {}

  ngOnInit() {}
}
