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
import { CtaTwoComponent } from "./home-two/cta-two/cta-two.component";
import { MarqueTextAreaComponent } from "./Common/marque-text-area/marque-text-area.component";
import { BreadcrumbComponent } from "./Common/breadcrumb/breadcrumb.component";
import { AboutMainComponent } from "./about/about-main/about-main.component";
import { AboutAreaComponent } from "./about/about-area/about-area.component";
import { AboutMarqueeComponent } from "./about/about-marquee/about-marquee.component";
import { AboutMissionAreaComponent } from "./about/about-mission-area/about-mission-area.component";
import { AboutVideoAreaComponent } from "./about/about-video-area/about-video-area.component";
import { AboutBrandAreaComponent } from "./about/about-brand-area/about-brand-area.component";
import { AboutJoinAreaComponent } from "./about/about-join-area/about-join-area.component";
import { AboutFooterComponent } from "./about/about-footer/about-footer.component";
import { FooterTwoComponent } from "./Common/footer-two/footer-two.component";
import { CreateMultipleMainComponent } from "./create-multiple/create-multiple-main/create-multiple-main.component";
import { CreateMultipleAreaComponent } from "./create-multiple/create-multiple-area/create-multiple-area.component";
import { ErrorPageMainComponent } from "./error-page/error-page-main/error-page-main.component";
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
    CtaTwoComponent,
    MarqueTextAreaComponent,
    BreadcrumbComponent,
    AboutMainComponent,
    AboutAreaComponent,
    AboutMarqueeComponent,
    AboutMissionAreaComponent,
    AboutVideoAreaComponent,
    AboutBrandAreaComponent,
    AboutJoinAreaComponent,
    AboutFooterComponent,
    FooterTwoComponent,
    CreateMultipleMainComponent,
    CreateMultipleAreaComponent,
    ErrorPageMainComponent,
    CommonFooterComponent,
  ],
  exports: [NgxSliderModule],
})
export class BitakonModule {}
