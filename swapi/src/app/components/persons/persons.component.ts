import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;
  // private personService: PersonsService;

  constructor(private prsService: PersonsService) {
    // this.personList = prsService.persons;
    // this.personService = prsService;
  }

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersonsName();
    this.prsService.fetchPersonsHeight();
  }
  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }
}
