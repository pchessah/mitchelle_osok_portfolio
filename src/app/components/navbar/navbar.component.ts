import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isContentOpen: boolean = false;
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  constructor() { }

  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

  toggleAccordion(){
    this.isContentOpen = !this.isContentOpen;
  }

  goToLinkedIn(){
    window.open("https://www.linkedin.com/in/mitchelle-ayoro-osok/", "_blank");
  }

  goToInstagram(){
    window.open("https://www.instagram.com/ayoro_osok/ ", "_blank");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}