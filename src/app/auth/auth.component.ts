import { Component, OnInit } from "@angular/core";
import { UserAuthService } from "../user-auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  username: string;
  password: string;

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit() {}

  public logIn() {
    console.log("Tried to log in");
  }
}
