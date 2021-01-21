import { Component } from '@angular/core';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personsService: PersonsService) { }
  //constructor(private URL: UrlService){}
  //constructor(private height: HeightService){}
  //constructor(private homeworld: HomeWorldService){}

}
