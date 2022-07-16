import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  
  goToLinkedIn(){
    window.open("https://www.linkedin.com/in/mitchelle-ayoro-osok/", "_blank");
  }

  goToInstagram(){
    window.open("https://www.instagram.com/ayoro_osok/ ", "_blank");
  }
}