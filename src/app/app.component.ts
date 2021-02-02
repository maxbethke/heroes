import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appTitle: string;
  ngVersion: string;

  constructor() {
    this.appTitle = this.getAppTitle();
    this.ngVersion = "Angular " + VERSION.major;
  }

  getAppTitle() {
    return "My first Angular App";
  }
}
