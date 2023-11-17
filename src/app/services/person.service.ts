import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SAVINGS_API } from './savings.api';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(`${SAVINGS_API}/api/person/all`);
  }

  createOrUpdatePerson(person: Person) {

    if(person.id != null  || person.id != '') {
      return this.http.post(`${SAVINGS_API}/api/person/new`, person);
    }
    else {
      return this.http.put(`${SAVINGS_API}/api/person/update`, person)
    }

  }

  findById(id:string) {
    return this.http.get(`${SAVINGS_API}/api/person/${id}`)
  }

  deleteById(id:string) {
    return this.http.delete(`${SAVINGS_API}/api/person/delete/${id}`)
  }
}
