import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeTwoMainComponent } from "./Bitakon/home-two/home-two-main/home-two-main.component";
import { AboutMainComponent } from "./Bitakon/about/about-main/about-main.component";
import { ContactMainComponent } from "./Bitakon/contact/contact-main/contact-main.component";
import { ActivityMainComponent } from "./Bitakon/activity/activity-main/activity-main.component";
import { LoginMainComponent } from "./Bitakon/login/login-main/login-main.component";
import { RegisterMainComponent } from "./Bitakon/register/register-main/register-main.component";
import { EditProfileMainComponent } from "./Bitakon/edit-profile/edit-profile-main/edit-profile-main.component";
import { UpcomingMainComponent } from "./Bitakon/upcoming/upcoming-main/upcoming-main.component";
import { ForgetMainComponent } from "./Bitakon/forget/forget-main/forget-main.component";
import { LiveAuctionMainComponent } from "./Bitakon/live-auction/live-auction-main/live-auction-main.component";
import { CreateMultipleMainComponent } from "./Bitakon/create-multiple/create-multiple-main/create-multiple-main.component";
import { ComingSoonMainComponent } from "./Bitakon/coming-soon/coming-soon-main/coming-soon-main.component";
import { SupportMainComponent } from "./Bitakon/support/support-main/support-main.component";
import { MaintananceMainComponent } from "./Bitakon/maintanance/maintanance-main/maintanance-main.component";
import { ErrorPageMainComponent } from "./Bitakon/error-page/error-page-main/error-page-main.component";
import { ProfileMainComponent } from "./Bitakon/profile/profile-main/profile-main.component";

const routes: Routes = [
  { path: "", component: HomeTwoMainComponent },
  { path: "about", component: AboutMainComponent },
  { path: "contact", component: ContactMainComponent },
  { path: "activity", component: ActivityMainComponent },
  { path: "login", component: LoginMainComponent },
  { path: "register", component: RegisterMainComponent },
  { path: "edit-profile", component: EditProfileMainComponent },
  { path: "upcoming", component: UpcomingMainComponent },
  { path: "forget", component: ForgetMainComponent },
  { path: "live-auction", component: LiveAuctionMainComponent },
  { path: "create-multiple", component: CreateMultipleMainComponent },
  { path: "coming-soon", component: ComingSoonMainComponent },
  { path: "support", component: SupportMainComponent },
  { path: "maintaince", component: MaintananceMainComponent },
  { path: "404", component: ErrorPageMainComponent },
  { path: "profile", component: ProfileMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
