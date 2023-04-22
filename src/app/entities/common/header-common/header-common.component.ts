import { Component, HostListener, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-common",
  templateUrl: "./header-common.component.html",
  styleUrls: ["./header-common.component.scss"],
})
export class HeaderCommonComponent implements OnInit {
  @Input() header__transparent: string | undefined;

  headerSticky: boolean = false;

  showSidebar: boolean = false;

  // sticky nav
  @HostListener("window:scroll", ["$event"]) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }

  // handleSidebar
  handleSidebar() {
    this.showSidebar = true;
  }
  handleSidebarClose() {
    this.showSidebar = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
