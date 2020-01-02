import { Injectable } from '@angular/core';
import {Answer, Question, Quizz, Parameters, OPType, serverIp } from '../data.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ParametersService {


  private idCounter;
  public actionsCollections: Observable<Parameters[]> ;

  public actionsCollections1: Parameters[] ;

  private currentAction: string;
  private iterator: number;

  private selectAction: Parameters;
  constructor( private http: HttpClient ) {
    this.idCounter = 0;

    this.actionsCollections = this.getActions();

    this.actionsCollections.subscribe(res => this.actionsCollections1 = res);

    console.log('1111111111111111111111111');

    console.log(this.actionsCollections1);
       // this.getActions().subscribe(res => this.convert2Actions( res.json() ) );
    // this.createAction('Sample Action 1', this.getFakeAction1());
    // this.createAction('Sample Action 2', this.getFakeAction2());
    // this.createAction('Sample Actions 3', this.getFakeAction3());
  }


  public newSession(actionId: string) {
    this.currentAction = actionId;
    this.iterator = 0;
  }

public getActionsForOperationsType( type: string  ): Parameters[] {

    console.log('1111111111111111111111111111111111111111');
    console.log(type);
     let actionsList: Parameters[];
     actionsList = new Array();
     if (type ===  'operations 1') {
    const act:  Parameters = { id: 'op1' , value: '2'};
    const act1:  Parameters = { id: 'op2' , value: '2'};
    const act2:  Parameters = { id: 'op3' , value: '2'};
    actionsList.push(act);
    actionsList.push(act1);
    actionsList.push(act2);

}else if (type === 'Recharge') {

const p1:  Parameters = { id: 'Localization distance' , value: '.'};
actionsList.push(p1);

const p0:  Parameters = { id: 'Localization tag' , value: '.'};
actionsList.push(p0);

const p2:  Parameters = { id: 'Dock I/O' , value: '.'};
actionsList.push(p2);

const p3:  Parameters = { id: 'Charge I/O' , value: '.'};
actionsList.push(p3);

}else if (type === 'Compress') {

const p1:  Parameters = { id: 'Compress I/O' , value: '.'};
 actionsList.push(p1);
}else if (type === 'Read Barcode') {

   const p1:  Parameters = { id: 'Localization distance' , value: '.'};
 actionsList.push(p1);

  const p0:  Parameters = { id: 'Localization tag' , value: '.'};
 actionsList.push(p0);

 const p2:  Parameters = { id: 'velocity' , value: '0.04'};
 actionsList.push(p2);
 const p3:  Parameters = { id: 'acceleration' , value: '0.001'};
 actionsList.push(p3);

 const p4:  Parameters = { id: 'Approach Pose' , value: '.'};
 actionsList.push(p4);


const p5:  Parameters = { id: 'Camera for detection' , value: '.'};
 actionsList.push(p5);

 const p6:  Parameters = { id: 'Allign Pose' , value: '.'};
 actionsList.push(p6);

 const p7:  Parameters = { id: 'Attached Pose' , value: '.'};
 actionsList.push(p4);

 const p8:  Parameters = { id: 'Pre retract Pose' , value: '.'};
 actionsList.push(p8);


 const p9:  Parameters = { id: 'Retract Pose' , value: '.'};
 actionsList.push(p9);


 const p12: Parameters = {id: 'read Barcode', value: '.'};
 actionsList.push(p12);

}else if (type === 'Pick') {

  const p1:  Parameters = { id: 'Localization distance' , value: '.'};
 actionsList.push(p1);

  const p0:  Parameters = { id: 'Localization tag' , value: '.'};
 actionsList.push(p0);

 const p2:  Parameters = { id: 'velocity' , value: '0.04'};
 actionsList.push(p2);
 const p3:  Parameters = { id: 'acceleration' , value: '0.001'};
 actionsList.push(p3);

 const p4:  Parameters = { id: 'Approach Pose' , value: '.'};
 actionsList.push(p4);


const p5:  Parameters = { id: 'Camera for detection' , value: '.'};
 actionsList.push(p5);

 const p6:  Parameters = { id: 'Allign Pose' , value: '.'};
 actionsList.push(p6);

 const p7:  Parameters = { id: 'Attached Pose' , value: '.'};
 actionsList.push(p4);

 const p8:  Parameters = { id: 'Pre retract Pose' , value: '.'};
 actionsList.push(p8);


 const p9:  Parameters = { id: 'Retract Pose' , value: '.'};
 actionsList.push(p9);

   const p10:  Parameters = { id: 'Grasp pin set-on' , value: '.'};
 actionsList.push(p10);


 const p11:  Parameters = { id: 'Grasp pin set off' , value: '.'};
 actionsList.push(p11);

}else if (type === 'Place') {

  const p1:  Parameters = { id: 'Localization distance' , value: '.'};
 actionsList.push(p1);

  const p0:  Parameters = { id: 'Localization tag' , value: '.'};
 actionsList.push(p0);

 const p2:  Parameters = { id: 'velocity' , value: '0.04'};
 actionsList.push(p2);
 const p3:  Parameters = { id: 'acceleration' , value: '0.001'};
 actionsList.push(p3);

 const p4:  Parameters = { id: 'Approach Pose' , value: '.'};
 actionsList.push(p4);


const p5:  Parameters = { id: 'Camera for detection' , value: '.'};
 actionsList.push(p5);

 const p6:  Parameters = { id: 'Allign Pose' , value: '.'};
 actionsList.push(p6);

 const p7:  Parameters = { id: 'Attached Pose' , value: '.'};
 actionsList.push(p4);

 const p8:  Parameters = { id: 'Pre retract Pose' , value: '.'};
 actionsList.push(p8);


 const p9:  Parameters = { id: 'Retract Pose' , value: '.'};
 actionsList.push(p9);


  const p10:  Parameters = { id: 'Grasp pin set-on' , value: '.'};
 actionsList.push(p10);


 const p11:  Parameters = { id: 'Grasp pin set off' , value: '.'};
 actionsList.push(p11);
}else if (type === 'Screw') {

  const p1:  Parameters = { id: 'Localization distance' , value: '.'};
 actionsList.push(p1);

  const p0:  Parameters = { id: 'Localization tag' , value: '.'};
 actionsList.push(p0);

 const p2:  Parameters = { id: 'velocity' , value: '0.04'};
 actionsList.push(p2);
 const p3:  Parameters = { id: 'acceleration' , value: '0.001'};
 actionsList.push(p3);

 const p4:  Parameters = { id: 'Approach Pose' , value: '.'};
 actionsList.push(p4);


const p5:  Parameters = { id: 'Camera for detection' , value: '.'};
 actionsList.push(p5);

 const p6:  Parameters = { id: 'Allign Pose' , value: '.'};
 actionsList.push(p6);

 const p7:  Parameters = { id: 'Attached Pose' , value: '.'};
 actionsList.push(p4);

 const p8:  Parameters = { id: 'Pre retract Pose' , value: '.'};
 actionsList.push(p8);


 const p9:  Parameters = { id: 'Retract Pose' , value: '.'};
 actionsList.push(p9);


  const p10:  Parameters = { id: 'Screw IO ' , value: '.'};
 actionsList.push(p10);


 const p11:  Parameters = { id: 'Screw Torque ' , value: '.'};
 actionsList.push(p11);
}


     return actionsList ;

}

public getOperationType() {
const OPTYPE: OPType[] = [
    {value: 'Pick', viewValue: 'pickType'},
    {value: 'Place', viewValue: 'opt typ2'},
    {value: 'Screw', viewValue: 'opt_typ3'},
    {value: 'Read Barcode ', viewValue: 'opt_typ4'},
    {value: 'Compress', viewValue: 'pickType'},
    {value: 'Recharge', viewValue: 'opt typ2'}
  ];

return OPTYPE;
}
public getActions(): Observable<Parameters[]> {
     return this.http.get<Parameters[]> ( serverIp.ip + '/parameters') ;
  }




}
