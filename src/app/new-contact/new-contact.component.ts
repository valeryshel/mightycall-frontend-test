import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      phoneNumber: new FormControl(null, [Validators.pattern('[- +()0-9]+'), Validators.required])
    })
  }
  form!: FormGroup
  submit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form);
      const formData = { ...this.form.value };
      console.log('Form data:', formData);
    }
  }
}
