import { Injectable } from '@angular/core';
import {Answer, Question, Tool, Part, serverIp} from '../data.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PartsService {

    obsParts: Observable<Part[]>;
    public parts: Part[];

  public toolCollections: Observable<Tool[]> ;
  constructor(private http: HttpClient) {


    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
   this.obsParts = this.getActions();
    this.obsParts.subscribe(res => this.parts = res);

     console.log(this.parts);
    // this.newProcess = process ;
  }

  public getActions(): Observable<Part[]> {
     return this.http.get< Part[]> ( serverIp.ip + '/parts') ;
  }


}
