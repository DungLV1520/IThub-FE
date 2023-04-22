import { Component, OnInit } from "@angular/core";
import SwiperCore, { Navigation, EffectFade } from "swiper";

SwiperCore.use([Navigation, EffectFade]);

@Component({
  selector: "app-home-hero",
  templateUrl: "./home-hero.component.html",
  styleUrls: ["./home-hero.component.scss"],
})
export class HomeHeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
