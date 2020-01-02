import { Injectable } from '@angular/core';
import {AssDetails, AssActionDetails} from '../data.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {serverIp} from '../data.model';

@Injectable()
export class GetassdetailsService {

   assDetails: Observable<AssDetails[]> = null;
   assDetails1: Observable<AssActionDetails[]>= null;
   flag: Boolean;
  public asssCollections: Observable<AssDetails[]> ;
  constructor(private http: HttpClient) {
      this.flag = false;
  }

  public getAssDetails(): Observable<AssDetails[]> {
    console.log( '1' ) ;
    console.log(this.flag);
    if (this.flag === false ) {
    console.log( 'FALSE' ) ;
    this.assDetails = this.http.get< AssDetails[]> (serverIp.ip + '/test4?Process=1') ;
    this.flag = true;
    return this.assDetails;
    } else {
    console.log( 'TRUE' ) ;
    return this.assDetails;
    }
}

    public getAssDetailsAction( id: String ): Observable<AssActionDetails[]> {
    console.log( '11' ) ;
    console.log(this.flag);
    this.assDetails1 = this.http.get< AssActionDetails[]> (serverIp.ip + '/test5?id=' + id) ;
    this.flag = true;
    return this.assDetails1;


  }
}
