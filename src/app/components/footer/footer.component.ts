import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
  }

  ngOnInit() { }

  
  goToLinkedIn(){
    window.open("https://www.linkedin.com/in/mitchelle-ayoro-osok/", "_blank");
  }

  goToInstagram(){
    window.open("https://www.instagram.com/ayoro_osok/ ", "_blank");
  }
}