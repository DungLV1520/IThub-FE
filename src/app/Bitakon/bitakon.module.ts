import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { SwiperModule } from "swiper/angular";
import { MetismenuAngularModule } from "@metismenu/angular";
import { ClipboardModule } from "ngx-clipboard";

import { HeaderComponent } from "./Common/header/header.component";
import { HomeTwoMainComponent } from "./home-two/home-two-main/home-two-main.component";
import { HeaderTwoComponent } from "./home-two/header-two/header-two.component";
import { HomeTwoHeroComponent } from "./home-two/home-two-hero/home-two-hero.component";
import { CollectionAreaTwoComponent } from "./home-two/collection-area-two/collection-area-two.component";
import { ProductsTwoComponent } from "./home-two/products-two/products-two.component";
import { CtaTwoComponent } from "./home-two/cta-two/cta-two.component";
import { AuctionAreaTwoComponent } from "./home-two/auction-area-two/auction-area-two.component";
import { BrandAreaTwoComponent } from "./home-two/brand-area-two/brand-area-two.component";
import { BlogAreaTwoComponent } from "./home-two/blog-area-two/blog-area-two.component";
import { MarqueTextAreaComponent } from "./Common/marque-text-area/marque-text-area.component";
import { BreadcrumbComponent } from "./Common/breadcrumb/breadcrumb.component";
import { AboutMainComponent } from "./about/about-main/about-main.component";
import { AboutAreaComponent } from "./about/about-area/about-area.component";
import { AboutMarqueeComponent } from "./about/about-marquee/about-marquee.component";
import { AboutMissionAreaComponent } from "./about/about-mission-area/about-mission-area.component";
import { AboutVideoAreaComponent } from "./about/about-video-area/about-video-area.component";
import { AboutTeamMembersComponent } from "./about/about-team-members/about-team-members.component";
import { AboutBrandAreaComponent } from "./about/about-brand-area/about-brand-area.component";
import { AboutJoinAreaComponent } from "./about/about-join-area/about-join-area.component";
import { AboutFooterComponent } from "./about/about-footer/about-footer.component";
import { ContactMainComponent } from "./contact/contact-main/contact-main.component";
import { ContactAreaComponent } from "./contact/contact-area/contact-area.component";
import { ActivityMainComponent } from "./activity/activity-main/activity-main.component";
import { ActivityAreaComponent } from "./activity/activity-area/activity-area.component";
import { LoginMainComponent } from "./login/login-main/login-main.component";
import { LoginAreaComponent } from "./login/login-area/login-area.component";
import { FooterTwoComponent } from "./Common/footer-two/footer-two.component";
import { RegisterMainComponent } from "./register/register-main/register-main.component";
import { RegisterAreaComponent } from "./register/register-area/register-area.component";
import { EditProfileMainComponent } from "./edit-profile/edit-profile-main/edit-profile-main.component";
import { EditProfileAreaComponent } from "./edit-profile/edit-profile-area/edit-profile-area.component";
import { BlogRightSideComponent } from "./Common/blog-right-side/blog-right-side.component";
import { PaginationComponent } from "./Common/pagination/pagination.component";
import { UpcomingMainComponent } from "./upcoming/upcoming-main/upcoming-main.component";
import { UpcomingAreaComponent } from "./upcoming/upcoming-area/upcoming-area.component";
import { ForgetMainComponent } from "./forget/forget-main/forget-main.component";
import { ForgetAreaComponent } from "./forget/forget-area/forget-area.component";
import { LiveAuctionMainComponent } from "./live-auction/live-auction-main/live-auction-main.component";
import { LiveAuctionAreaComponent } from "./live-auction/live-auction-area/live-auction-area.component";
import { CreateMultipleMainComponent } from "./create-multiple/create-multiple-main/create-multiple-main.component";
import { CreateMultipleAreaComponent } from "./create-multiple/create-multiple-area/create-multiple-area.component";
import { ComingSoonMainComponent } from "./coming-soon/coming-soon-main/coming-soon-main.component";
import { SupportMainComponent } from "./support/support-main/support-main.component";
import { SupportFeatureAreaComponent } from "./support/support-feature-area/support-feature-area.component";
import { SupportFaqAreaComponent } from "./support/support-faq-area/support-faq-area.component";
import { MaintananceMainComponent } from "./maintanance/maintanance-main/maintanance-main.component";
import { ErrorPageMainComponent } from "./error-page/error-page-main/error-page-main.component";
import { ProfileMainComponent } from "./profile/profile-main/profile-main.component";
import { ProfileAreaComponent } from "./profile/profile-area/profile-area.component";
import { CommonFooterComponent } from "./Common/common-footer/common-footer.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    MatSelectModule,
    MatSliderModule,
    RouterModule,
    MatDialogModule,
    NgxSliderModule,
    FormsModule,
    MetismenuAngularModule,
    ClipboardModule,
  ],
  declarations: [
    HeaderComponent,
    HomeTwoMainComponent,
    HeaderTwoComponent,
    HomeTwoHeroComponent,
    CollectionAreaTwoComponent,
    ProductsTwoComponent,
    CtaTwoComponent,
    AuctionAreaTwoComponent,
    BrandAreaTwoComponent,
    BlogAreaTwoComponent,
    MarqueTextAreaComponent,
    BreadcrumbComponent,
    AboutMainComponent,
    AboutAreaComponent,
    AboutMarqueeComponent,
    AboutMissionAreaComponent,
    AboutVideoAreaComponent,
    AboutTeamMembersComponent,
    AboutBrandAreaComponent,
    AboutJoinAreaComponent,
    AboutFooterComponent,
    ContactMainComponent,
    ContactAreaComponent,
    ActivityMainComponent,
    ActivityAreaComponent,
    LoginMainComponent,
    LoginAreaComponent,
    FooterTwoComponent,
    RegisterMainComponent,
    RegisterAreaComponent,
    EditProfileMainComponent,
    EditProfileAreaComponent,
    BlogRightSideComponent,
    PaginationComponent,
    UpcomingMainComponent,
    UpcomingAreaComponent,
    ForgetMainComponent,
    ForgetAreaComponent,
    LiveAuctionMainComponent,
    LiveAuctionAreaComponent,
    CreateMultipleMainComponent,
    CreateMultipleAreaComponent,
    ComingSoonMainComponent,
    SupportMainComponent,
    SupportFeatureAreaComponent,
    SupportFaqAreaComponent,
    MaintananceMainComponent,
    ErrorPageMainComponent,
    ProfileMainComponent,
    ProfileAreaComponent,
    CommonFooterComponent,
  ],
  exports: [NgxSliderModule],
})
export class BitakonModule {}
