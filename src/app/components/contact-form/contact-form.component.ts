import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  constructor(){}

  contactForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl('',[Validators.required, Validators.email]),
    subject : new FormControl('',[Validators.required,Validators.maxLength(20)]),
    message : new FormControl('',[Validators.required])
});
  
 
  ngOnInit(): void {
  }

  get name (){
    return this.contactForm.get('name');
  }
  save(){
    console.log(this.contactForm.value);
    console.log('Formulario válido:',this.contactForm.valid)
  }

}
