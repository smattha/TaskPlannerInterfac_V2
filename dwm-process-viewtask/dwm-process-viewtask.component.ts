import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from '../services/quizz.service';
import { Question, Quizz, QuizzAnswer, QuizzResult, Answer, Process, Task, Operation } from '../data.model';
import { Subscription } from 'rxjs/Subscription';
import {ProcessService} from '../services/process.service';
import {PlannerService} from '../services/plannerservice.service';
import {TaskService } from '../services/task.service';
import { Observable } from 'rxjs/Observable';
import { OperationsService } from '../services/operationssevice.service';

@Component({
  selector: 'app-dwm-process-viewtask',
  templateUrl: './dwm-process-viewtask.component.html',
  styleUrls: ['./dwm-process-viewtask.component.css']
})

export class DwmProcessViewtaskComponent implements OnInit {
public flag: boolean;
  processSelected: Process;
  quizzId: string;
  results: QuizzResult;
  currentQuestion: Question;
  curTaskObs: Observable<Task>;

  curTask: Task;

  showDebug = false;
  showResults = true;

  sub: Subscription;
  tasks: Task[];

  constructor(
    private plannerService: PlannerService,
    private router: Router,
    private route: ActivatedRoute,
     public processService: ProcessService,
     public taskService: TaskService,
     public opSrv: OperationsService,
    ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    this.quizzId = '1' ;
    // this.processSelected = this.processService.getAction(this.quizzId); // .subscribe(res => this.actionSelected = res);
    this.taskService.getTaskesForAll(this.processService.selected).subscribe(res =>  this.tasks = res);
    // this.curTaskObs.subscribe(res => this.curTask =res);

  });
  }

  handleSelectAnswer(ans: Answer) {

  }

    complatibleResources(id: String) {
    this.plannerService.startApplication(id).subscribe();
    // .subscribe(wisdom => {
    //   this.chuckNorrisWisdom = wisdom.json();
     // });
  }
    fillTemplates(id: String) {
    this.plannerService.startApplication2(id).subscribe();
    // .subscribe(wisdom => {
    //   this.chuckNorrisWisdom = wisdom.json();
     // });
  }

    runPlanner(id: String) {
    this.plannerService.startApplication(this.processService.selected).subscribe();
    this.plannerService.startApplication3(this.processService.selected).subscribe();
    this.router.navigate([`/assigments`]);
    // .subscribe(wisdom => {
    //   this.chuckNorrisWisdom = wisdom.json();
     // });
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }
  public viewResources() {
  this.flag = true;
  }
public back() {
 this.router.navigate([`/start`]);
}
  selectResource(q) {

    this.opSrv.SelectedOperation( q);

this.router.navigate([`/operations`]);
  }



}
