import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
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
