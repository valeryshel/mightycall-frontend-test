import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {delay} from 'rxjs/operators'

export interface Contact{
  name: string
  surname?: string
  phone?: string
  completed: boolean
  id?: number
  // username?: string
  // email?: string
  // text?: string
  // website?: string
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {

  contacts: Contact[] = []
  loading = false
  contactName = ''

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchContacts()
  }

  addContact() {
    if (!this.contactName.trim()) {
      return
    }
    const newContact: Contact = {
      name: this.contactName,
      completed: false,
      // surname: '',
      // username: '',
      // email: '',
      // phone: ''
    }

    this.http.post<Contact>('https://jsonplaceholder.typicode.com/users', newContact)
    .subscribe( contact => {
      // console.log('Add contact');
      this.contacts.push(contact);
      this.contactName = '';
    })
  }

  fetchContacts() {
    this.loading = true
    this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users?_limit=2')
      .pipe(delay(1500))
      .subscribe(contacts => {
        this.contacts = contacts
        this.loading = false
      })
  }

  removeContact(id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(() => {
        this.contacts = this.contacts.filter(t => t.id !== id)
      })
  }
}
