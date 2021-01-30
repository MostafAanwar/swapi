import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  personsChanged = new Subject<string[]>();
  persons: string[] = [];

  constructor(private http: HttpClient) { }
  fetchPersons() {
    this.http
      .get<any>('https://swapi.dev/api/people')
      .pipe(
        map(resData => {
          return resData.results.map(character => character.name);
        })
      )
      .subscribe(transformedData => {
        this.personsChanged.next(transformedData);
      });
  }
}
