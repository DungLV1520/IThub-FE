import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import SwiperCore, { Navigation, EffectFade } from "swiper";

SwiperCore.use([Navigation, EffectFade]);

@Component({
  selector: "app-home-hero",
  templateUrl: "./home-hero.component.html",
  styleUrls: ["./home-hero.component.scss"],
})
export class HomeHeroComponent implements OnInit {
  @ViewChild("modal") modal: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (localStorage.getItem("show") !== "true") {
      setTimeout(() => {
        this.openDialog(this.modal);
        localStorage.setItem("show", "true");
      }, 500);
    }
  }

  openDialog(content: any): void {
    this.dialog.open(content, {
      width: "1250px",
    });
  }
}
