import { Injectable } from '@angular/core';
import {Answer, Question, Quizz, Actions, serverIp } from '../data.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ActionsService {

  private idCounter;
  public actionsCollections: Observable<Actions[]> ;

  public actionsCollections1: Actions[] ;

  private currentAction: string;
  private iterator: number;

  private selectAction: Actions;
  constructor( private http: HttpClient ) {
    this.idCounter = 0;

    this.actionsCollections = this.getActions();

    this.actionsCollections.subscribe(res => this.actionsCollections1 = res);

    console.log('1111111111111111111111111');

    console.log(this.actionsCollections1);
       // this.getActions().subscribe(res => this.convert2Actions( res.json() ) );
    this.createAction('Sample Action 1', this.getFakeAction1());
    this.createAction('Sample Action 2', this.getFakeAction2());
    // this.createAction('Sample Actions 3', this.getFakeAction3());
  }


  public newSession(actionId: string) {
    this.currentAction = actionId;
    this.iterator = 0;
  }

public getActionsForOperationsType( type: string  ): Actions[] {

    const act:  Actions = { id: '1' , name: '2'};
   const act1:  Actions = { id: '1' , name: '2'};
      const act2:  Actions = { id: '1' , name: '2'};
    let actionsList: Actions[];
     actionsList = new Array();
     actionsList.push(act);
actionsList.push(act1);
actionsList.push(act2);
     return actionsList ;

}
  public createAction(name: string, act: Actions ) {
    // this.actionsCollections.push(act);
    return name;
  }


public getActions(): Observable<Actions[]> {
     return this.http.get< Actions[]> ( serverIp.ip + '/actions') ;
  }



  getAction(id: string): Actions  {
      console.log(id);
      console.log('1111111111111111111111111');
      console.log(this.actionsCollections1);

      // this.actionsCollections.map(col => col.find(actionsSelected => actionsSelected.id === id));
      this.selectAction = this.actionsCollections1.find(actionsSelected => actionsSelected.id === id);
     console.log('333333333333333333333333');
     console.log(this.selectAction);

     return this.selectAction ;
}


  public createQuestion(text: string, answers: Answer[]): Question {
    this.idCounter++;
    return {
      id: this.idCounter,
      text,
      answers,
    };
  }


  private getFakeAction1() {
   const act:  Actions = { id: '1' , name: '2'};
   return act;
  }


  private getFakeAction2() {
   const act:  Actions = { id: '1' , name: '2'};
   return act;
  }


  private getFakeAction3() {
   const act:  Actions = { id: '1' , name: '2'};
   return act;
  }

}
