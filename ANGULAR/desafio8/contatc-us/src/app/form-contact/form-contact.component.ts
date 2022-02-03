import { formContact } from './../shared/form';
import { FormService } from './form-contact.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  
  formContact!: FormGroup;
  submitted = false;


  constructor(
    private FormBuilder: FormBuilder,
    private service: FormService
    ) { }

  ngOnInit() {

    this.formContact =  this.FormBuilder.group({
     nome: [null, Validators.required],
     email: [null, [Validators.required, Validators.email]],
     message: [null, Validators.required]
    });
  }


  onSubmit(){
    this.submitted = true;
    console.log(this.formContact.value);
    if (this.formContact.valid) {
      console.log('submit');
      this.service.create(this.formContact.value)
      .subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () => console.log('request OK')
      ); 
    }
}
   
}
