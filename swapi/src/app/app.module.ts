import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { PersonInputComponent } from './components/persons/person-input.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
