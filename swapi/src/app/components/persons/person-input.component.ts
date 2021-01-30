import { Component } from '@angular/core';

import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private personsService: PersonsService) { }

}