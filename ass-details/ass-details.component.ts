import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetassdetailsService } from '../services/getassdetails.service';
import { Question, Quizz, AssDetails, QuizzResult, Answer, Process, Operation, OPType } from '../data.model';
import { Subscription } from 'rxjs/Subscription';

import {OperationsService } from '../services/operationssevice.service';
import { Observable } from 'rxjs/Observable';
import { ActionsService } from '../services/actions.service';
import { MaterialModule } from '@angular/material';

@Component({
  selector: 'app-assdetails',
  templateUrl: './ass-details.component.html',
  styleUrls: ['./ass-details.component.css']
})
export class AssDetailsComponent implements OnInit {

  processSelected: Process;
  quizzId: string;
  results: QuizzResult;
  currentQuestion: Question;

  showDebug = false;
  showResults = true;

  sub: Subscription;
  ass: AssDetails[];

  @Input() id: string;
  constructor(
    private router: Router,
     public assSrv: GetassdetailsService
    ) { }



  ngOnInit() {

     this.assSrv.getAssDetails().subscribe( res => this.ass = res);

  }



    public back() {
this.router.navigate([`/process/1`]);

    }


    public getActions() {
this.router.navigate([`/getActions/-1`]);
    }

    public getAction( i: String) {
        i = i;
this.router.navigate([`/getActions/` + i]);

    }

  handleSelectAnswer(ans: Answer) {

  }


  OnDestroy() {
    this.sub.unsubscribe();
  }
}
