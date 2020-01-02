import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssDetails , Part, serverIp } from '../data.model';


@Injectable()
export class PlannerService {

  constructor(private http: Http) { }
  // GET https://api.chucknorris.io/jokes/random
  public startApplication(id: String) {
    return this.http.get(serverIp.ip + '/test2?Process=' + id);
  }


    public startApplication2(id: String) {
     return this.http.get ( serverIp.ip + '/test3?Process=' + id) ;
  }



      public startApplication3(id: String) {
    return this.http.get(serverIp.ip + '/test4?Process=' + id);
  }

    public getprocess() {
     return this.http.get(serverIp.ip + '/test2?Process=');
    // .map(res => <Test[]>res.json();
  }

    public getAssigments() {
     return this.http.get(serverIp.ip + '/test2?Assigment=');
    // .map(res => <Test[]>res.json();
  }

}
