

import { Injectable } from '@angular/core';
import {  serverIp,assline} from '../data.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class GetAssLinesService {


public selected: String;
  private idCounter;
  public asslineCollections: Observable<assline[]> ;

  public newShopFloor: assline ;

  //public ShopFloorCollections1: ShopFloor[] ;

  private selectassline: assline;
  constructor( private http: HttpClient ) {
    this.idCounter = 0;
   //this.asslineCollections = this.getShopFloores();
    //this.ShopFloorCollections.subscribe(res => this.ShopFloorCollections1 = res);
    // this.newShopFloor = ShopFloor ;
    // const act:  ShopFloor = { id: '1' , name: '2', tasks : []};
    // this.newShopFloor = act ;
}




public getLinesData(id:String): Observable<assline[]> {
    return this.http.get< assline[]> ( serverIp.ip + '/getlines?Shopfloor='+id) ;
}



}
