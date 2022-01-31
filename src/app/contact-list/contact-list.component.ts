import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Contact{
  id?: number
  name: string
  surname: string
  username: string
  email: string
  phone: string
  text?: string
  completed: boolean
  website?: string
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = []

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users?_limit=5')
    .subscribe(contacts => {
      console.log('Response', contacts)
      // this.contacts = response
      this.contacts = contacts
    })
  }
}
