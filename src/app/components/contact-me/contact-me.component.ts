import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contact-me',
  templateUrl: 'contact-me.component.html',
  styleUrls: ['contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {
  modalRef: BsModalRef;
  contactMeForm: FormGroup;
  constructor(private modalService: BsModalService,
              private _fb: FormBuilder)
  {
    this.contactMeForm = this._fb.group({
      name: [''],
      email: [''],
      message: ['']
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() { }
}