import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutMainComponent } from "./entities/about/about-main/about-main.component";
import { HomeMainComponent } from "./entities/home/home-main/home-main.component";
import { ShortLinkMainComponent } from "./entities/short-link/short-link-main/short-link-main.component";
import { ErrorPageComponent } from "./entities/error-page/error-page.component";

const routes: Routes = [
  { path: "", component: ShortLinkMainComponent },
  { path: "home", component: HomeMainComponent },
  { path: "about", component: AboutMainComponent },
  { path: "short-link", component: ShortLinkMainComponent },
  { path: "404", component: ErrorPageComponent },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
