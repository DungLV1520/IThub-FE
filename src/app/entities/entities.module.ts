import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { SwiperModule } from "swiper/angular";
import { MetismenuAngularModule } from "@metismenu/angular";
import { ClipboardModule } from "ngx-clipboard";

import { HeaderCommonComponent } from "./common/header-common/header-common.component";
import { HomeMainComponent } from "./home/home-main/home-main.component";
import { HeaderComponent } from "./home/header/header.component";
import { HomeHeroComponent } from "./home/home-hero/home-hero.component";
import { CtaComponent } from "./home/cta/cta.component";
import { MarqueAreaComponent } from "./common/marque-area/marque-area.component";
import { BreadcrumbComponent } from "./common/breadcrumb/breadcrumb.component";
import { AboutMainComponent } from "./about/about-main/about-main.component";
import { AboutAreaComponent } from "./about/about-area/about-area.component";
import { AboutMarqueeComponent } from "./about/about-marquee/about-marquee.component";
import { AboutMissionAreaComponent } from "./about/about-mission-area/about-mission-area.component";
import { AboutVideoAreaComponent } from "./about/about-video-area/about-video-area.component";
import { AboutBrandAreaComponent } from "./about/about-brand-area/about-brand-area.component";
import { AboutJoinAreaComponent } from "./about/about-join-area/about-join-area.component";
import { ShortLinkMainComponent } from "./short-link/short-link-main/short-link-main.component";
import { ShortLinkAreaComponent } from "./short-link/short-link-area/short-link-area.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ErrorPageComponent } from "./error-page/error-page.component";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
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
    HeaderCommonComponent,
    HomeMainComponent,
    HeaderComponent,
    HomeHeroComponent,
    CtaComponent,
    MarqueAreaComponent,
    BreadcrumbComponent,
    AboutMainComponent,
    AboutAreaComponent,
    AboutMarqueeComponent,
    AboutMissionAreaComponent,
    AboutVideoAreaComponent,
    AboutBrandAreaComponent,
    AboutJoinAreaComponent,
    ShortLinkMainComponent,
    ShortLinkAreaComponent,
    ErrorPageComponent,
  ],
  exports: [NgxSliderModule],
})
export class EntitiesModule {}
