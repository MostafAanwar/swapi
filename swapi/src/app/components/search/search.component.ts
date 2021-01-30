import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  personList: string[];
  isFetching = false;
  private serviceListSubs: Subscription;
  // private personService: searchService;

  constructor(private srchService: SearchService) {
    // this.personList = srchService.persons;
    // this.personService = srchService;
  }

  ngOnInit() {
    this.serviceListSubs = this.srchService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.srchService.fetchPersons();
  }
  ngOnDestroy() {
    this.serviceListSubs.unsubscribe();
  }

  callTest(){
   this.srchService.fetchPersons();
}
}
