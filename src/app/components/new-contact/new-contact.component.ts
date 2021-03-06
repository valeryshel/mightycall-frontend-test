import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact-list/contact-list.component';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  title = 'New Contact';


  constructor() { }
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      phoneNumber: new FormControl(null, [Validators.pattern('[- +()0-9]+'), Validators.required]),
      newInput: new FormGroup({
        number: new FormControl(null),
        text: new FormControl(''),
        link: new FormControl('', Validators.pattern('/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/'))
      }),
      fields: new FormArray([])
    })
  }

  get name() { return this.form.get('name'); }
  get surname() { return this.form.get('surname'); }
  get phoneNumber() { return this.form.get('phoneNumber'); }
  get fields() { return this.form.get('fields') as FormArray;}


  submit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form);
      const formData = { ...this.form.value };
      console.log('Form data:', formData);
    }
  }

  addField() {
    const field = new FormControl('', Validators.required);
    (this.form.get('fields') as FormArray).push(field);
  }



}


