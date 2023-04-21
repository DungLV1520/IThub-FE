import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeTwoMainComponent } from "./Bitakon/home-two/home-two-main/home-two-main.component";
import { AboutMainComponent } from "./Bitakon/about/about-main/about-main.component";
import { CreateMultipleMainComponent } from "./Bitakon/create-multiple/create-multiple-main/create-multiple-main.component";
import { ErrorPageMainComponent } from "./Bitakon/error-page/error-page-main/error-page-main.component";

const routes: Routes = [
  { path: "", component: HomeTwoMainComponent },
  { path: "about", component: AboutMainComponent },
  { path: "create-multiple", component: CreateMultipleMainComponent },
  { path: "404", component: ErrorPageMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
