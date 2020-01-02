import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProcessService} from '../services/process.service';
import { Question, Quizz, QuizzAnswer, QuizzResult, Answer, Process, Task } from '../data.model';

@Component({
  selector: 'app-editprocess',
  templateUrl: './editprocess.component.html',
  styleUrls: ['./editprocess.component.css']
})
export class EditprocessComponent implements OnInit {

  name: string ;

  newProcessTesting: Process;


  constructor(private router: Router,  private route: ActivatedRoute, public process: ProcessService, ) {


}

  ngOnInit() {

     this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
      console.log('11111');
    });


    this.process.newProcess.name = this.name ;
  }

  newTask() {
   // const op:  Task = {id: 'id', name: ' name', operations: [] , '.' };
   // this.process.newProcess.tasks.push(op);
  }


  Store() {
      console.log('Store!!!!!!!!!!!!!!!!!!!!!!');
      console.log(this.process.newProcess);
      this.process.storeProcess( ).subscribe( res => this.newProcessTesting = res);
      console.log('Send to db !!!!!!!!!!!!!!!!!!!!!!');

  }


}
