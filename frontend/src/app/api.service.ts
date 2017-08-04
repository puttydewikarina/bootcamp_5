import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http:Http, private router:Router) { }

  getEvent() {

    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.get('http://localhost:8000/api/event', options)
    .map(result => result.json());
  }

  addEvent(name:string, date:string, venue:string, ticket_price:string, qty:string) {
    
    let data = {
      "name" : name,
      "date" : date,
      "venue" : venue,
      "ticket_price" : ticket_price,
      "qty" : qty,
    };
    let body = JSON.stringify(data);
    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.post('http://localhost:8000/api/event/add', body, options)
    .map(result => result.json());
  }

  removeEvent(id:number) {
    let data = {
      "id" : id,
    };
    let body = JSON.stringify(data);
    let headers = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : headers });

    return this.http.post('http://localhost:8000/api/event/delete', body, options)
    .map(result => result.json());
  }
}
