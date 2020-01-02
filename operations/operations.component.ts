import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from '../services/quizz.service';
import { Question, Quizz, QuizzAnswer, QuizzResult, Answer, Process, Operation, OPType } from '../data.model';
import { Subscription } from 'rxjs/Subscription';
import {ProcessService} from '../services/process.service';
import {PlannerService} from '../services/plannerservice.service';
import {OperationsService } from '../services/operationssevice.service';
import { Observable } from 'rxjs/Observable';
import { ActionsService } from '../services/actions.service';


@Component({
  selector: 'app-operation',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  processSelected: Process;
  quizzId: string;
  results: QuizzResult;
  currentQuestion: Question;

  showDebug = false;
  showResults = true;

  sub: Subscription;
  operations: Operation[];
  operationsNew: Observable<Operation[]>;
  operationsNewArray: Operation[];

  OPTYPE: OPType[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  @Input() id: string;
  constructor(
    private plannerService: PlannerService,
    private router: Router,
    private route: ActivatedRoute,
     public processService: ProcessService,
     public operationService: OperationsService,

     public actionService: ActionsService
    ) { }



  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      // this.processSelected = this.processService.getAction( this.id ); // .subscribe(res => this.actionSelected = res);
      this.operationService.getOperationes(this.operationService.operationSelected.id).subscribe(res =>  this.operations = res);
      this.operationsNewArray = new Array();
      // this.quizzService.newSession(this.quizzId);
      // this.currentQuestion = this.quizzService.getNextQuestion();
      // this.operationsNew.subscribe ( res => this.operationsNewArray = res);
    });
  }


  newOperation() {

    const opNew = this.createOperation ( 'name', 'name', 'test' );


  const opNewObs = Observable.create(observer => {
  setTimeout(() => {
    observer.next(opNew);
    observer.complete();
  }, 2000); }) ;

     this.operationsNewArray.push( opNew);

    console.log(this.operationsNewArray);
    }

    public back() {
this.router.navigate([`/process/1`]);

    }
  public createOperation(name: string, id1: string, type1: string): Operation {

    return {
      id: id1,
      name: name,
      type: type1,
      actionList : this.actionService.getActionsForOperationsType( type1),
      parameters: null,
      tool: null,
      workingArea: null,
      part: null
    };
  }
  handleSelectAnswer(ans: Answer) {

  }

  editOperation(q: Operation)  {
    this.operationService.SelectedOperation(q);
    this.router.navigate([`/editOperation`]);

  }


  OnDestroy() {
    this.sub.unsubscribe();
  }
}
