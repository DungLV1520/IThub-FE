import { Component, OnInit } from "@angular/core";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

@Component({
  selector: "app-marque-area",
  templateUrl: "./marque-area.component.html",
  styleUrls: ["./marque-area.component.scss"],
})
export class MarqueAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
