
import { Injectable } from '@angular/core';
import {serverIp, Answer, Question, Tool, Actions, PartInWorkingArea} from '../data.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GetPartInworkingareaService {

    public resourceCollections: Observable<PartInWorkingArea[]> ;
    public resource: PartInWorkingArea[];

  constructor(private http: HttpClient) {


    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');
    this.resourceCollections = this.getActions();
    this.resourceCollections.subscribe(res => this.resource = res);

     // console.log(this.tools);
    // this.newProcess = process ;
  }

  public getActions(): Observable<PartInWorkingArea[]> {
     return this.http.get< PartInWorkingArea[]> ( serverIp.ip + '/resources') ;
  }


    public getPartsInWorkArea(id: String): Observable<PartInWorkingArea[]> {
     return this.http.get< PartInWorkingArea[]> ( serverIp.ip + '/getparts_inw_a?WorkingArea='+id) ;
  }





}
