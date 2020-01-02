import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/';
import {Test } from './../test/test.component';
import { serverIp } from '../data.model';

@Injectable()
export class ChuckService {

  constructor(private http: Http) { }
  // GET https://api.chucknorris.io/jokes/random
  public startApplication() {
    return this.http.get(serverIp.ip + '/test2');
  }

    public startApplication2() {
    return this.http.get(serverIp.ip + '/test3');
  }


      public startApplication3() {
    return this.http.get(serverIp.ip + '/test4');
  }

    public getprocess() {
     return this.http.get(serverIp.ip + '/test2');
    // .map(res => <Test[]>res.json();
  }

}
