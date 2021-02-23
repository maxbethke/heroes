import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeroesComponent } from "../heroes/heroes.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { BackofficeComponent } from "../backoffice/backoffice.component";
import { AuthGuardService } from "../auth-guard.service";
import { AuthComponent } from "../auth/auth.component";
import { Role } from "../role.enum";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "hero/:id", component: HeroDetailComponent },
  { path: "login", component: AuthComponent },
  {
    path: "backoffice",
    component: BackofficeComponent,
    canActivate: [AuthGuardService],
    data: {
      role: [Role.Backoffice]
    }
  },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
