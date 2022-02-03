
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { formContact } from '../shared/form';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  
  formContact!: FormGroup;
  formContactService: any;

  constructor(
    private FormBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit() {

    this.formContact =  this.FormBuilder.group({
     nome: [null, Validators.required],
     email: [null, [Validators.required, Validators.email]],
     message: [null, Validators.required]
    });
  }

  onSubmit(){
    console.log(this.formContact.value);


}
 

  // limpa o formulario
  
}
