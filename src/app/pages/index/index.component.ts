import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  styleUrls: ["index.component.scss"]
})


export class IndexComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
