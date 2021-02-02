import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  AppTitle = getAppTitle();
  ngVersion = "Angular " + VERSION.major;

  constructor
}

var getAppTitle = () => {
  return "My first Angular App";
};
