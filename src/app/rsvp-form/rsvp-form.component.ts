import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, Validators, FormArray, NgForm } from '@angular/forms';
import { IRSVP } from '../models/rsvp.model';
import { DOCUMENT } from '@angular/common';
import "node_modules/bootstrap/dist/css/bootstrap.min.css";
declare var window: any;
@Component({
  selector: 'app-rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.scss']
})
export class RsvpFormComponent implements OnInit{
  rsvp: IRSVP = { name: '', phone: '', pax: '', address: '',}
  rsvps: IRSVP[] = [];
  confirmationModal: any;
  errorModal:any;
  hasError:boolean = false;
  isLoading:boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document, private fb: FormBuilder, private http: HttpClient,) {
    console.log(this.document.location.href);
  }

  @Input() isKL: boolean = true;

  ngOnInit() {
    // this.firebaseProvider.getRSVPs(this.isKL).subscribe((res: IRSVP[]) => {
    //   this.rsvps = res;
    //   console.table(this.rsvps)
    // })

    this.confirmationModal = new window.bootstrap.Modal(
      document.getElementById('confirmationModal')
    );

    this.errorModal = new window.bootstrap.Modal(
      document.getElementById('errorModal')
    );

    console.log(this.isKL);
  }

  onSubmit(form: NgForm) {
    this.validate(form);
    if(!this.hasError){
      this.isLoading = true;
      // this.firebaseProvider.addRSVP(form.value,this.isKL).
      //   then(() => 
      //   {
      //     this.openConfirmationModal();
      //     form.reset(); 
          this.isLoading = false;
        
    }
    
  }

  openConfirmationModal() {
    console.log('open')
    this.confirmationModal.show();
  }

  openErrorModal(){
    this.errorModal.show();
  }
  validate(form: NgForm) {
    console.log(form.value)
    var values = form.value;
    if(this.isStringNullOrEmpty(values.name) || this.isStringNullOrEmpty(values.phone) || this.isStringNullOrEmpty(values.pax) ){
      this.hasError = true;
    }else{
      this.hasError = false;
    }
    
    
  }

  isStringNullOrEmpty(text){
    return  (text == null || text.toString().trim().length == 0);
  }

}
