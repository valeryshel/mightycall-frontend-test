import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NewContactComponent } from './new-contact/new-contact.component';
import { HttpClientModule } from '@angular/common/http'
import { ContactListComponent } from './contact-list/contact-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
