import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzService } from '../services/quizz.service';
import { Question, Quizz, QuizzAnswer, QuizzResult, Answer, Process } from '../data.model';
import { Subscription } from 'rxjs/Subscription';
import {ProcessService} from '../services/process.service';
import {PlannerService} from '../services/plannerservice.service';

@Component({
  selector: 'app-play-quizz',
  templateUrl: './play-quizz.component.html',
  styleUrls: ['./play-quizz.component.css']
})
export class PlayQuizzComponent implements OnInit {
  processSelected: Process;
  quizzId: string;
  results: QuizzResult;
  currentQuestion: Question;

  showDebug = false;
  showResults = true;

  sub: Subscription;

  constructor(
    private plannerService: PlannerService,
    private router: Router,
    private route: ActivatedRoute,
     public processService: ProcessService
    ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.quizzId = params['id'];
      this.processSelected = this.processService.getAction(this.quizzId); // .subscribe(res => this.actionSelected = res);
      // this.quizzService.newSession(this.quizzId);
     // this.currentQuestion = this.quizzService.getNextQuestion();
    });
  }

  handleSelectAnswer(ans: Answer) {

  }

    complatibleResources() {
    this.plannerService.startApplication('1').subscribe();
    // .subscribe(wisdom => {
    //   this.chuckNorrisWisdom = wisdom.json();
     // });
  }
    fillTemplates() {
    this.plannerService.startApplication2('1').subscribe();
    // .subscribe(wisdom => {
    //   this.chuckNorrisWisdom = wisdom.json();
     // });
  }

    runPlanner() {
    this.plannerService.startApplication3('1').subscribe();
    // .subscribe(wisdom => {
    //   this.chuckNorrisWisdom = wisdom.json();
     // });
  }

  OnDestroy() {
    this.sub.unsubscribe();
  }
}
