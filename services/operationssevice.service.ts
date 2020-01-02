import { Injectable } from '@angular/core';
import { Operation, serverIp } from '../data.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class OperationsService {

  private idCounter;
  public OperationCollections: Observable<Operation[]> ;

  public OperationCollections1: Operation[] ;

  private selectOperation: Operation;
  public operationSelected: Operation ;
  constructor( private http: HttpClient ) {
    this.idCounter = 0;

    // this.OperationCollections = this.getOperationes();

    // this.OperationCollections.subscribe(res => this.OperationCollections1 = res);

}


public SelectedOperation( q: Operation) {
    this.operationSelected = q;
}


public getOperationes(id: string): Observable<Operation[]> {

    return this.http.get< Operation[]> ( serverIp.ip + '/Operation?Task=' + id) ;

}



  getAction(id: string): Operation  {

    console.log(id);
     // this.OperationCollections.map(col => col.find(OperationSelected => OperationSelected.id === id));

     this.selectOperation = this.OperationCollections1.find(OperationSelected => OperationSelected.id === id);
     console.log('333333333333333333333333');
     console.log(this.OperationCollections1);
          console.log(this.getOperationes);

     return this.selectOperation ;
}


}
