import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";
import { MessagesComponent } from "./messages/messages.component";
import { MessageService } from "./message.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroSkillsComponent } from "./hero-skills/hero-skills.component";
import { BackofficeComponent } from "./backoffice/backoffice.component";
import { UserAuthService } from "./user-auth.service";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeaderComponent,
    DashboardComponent,
    HeroSkillsComponent,
    BackofficeComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService, MessageService, UserAuthService]
})
export class AppModule {}
