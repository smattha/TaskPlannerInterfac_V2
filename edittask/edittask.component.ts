import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProcessService} from '../services/process.service';

import { Process, Task , Operation, OPType } from '../data.model';
import { ParametersService } from '../services/parameters.service';


@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

OPTYPE: OPType[] ;

  newOpType: string;
@Input() task: Task;
constructor( private router: Router,
     private route: ActivatedRoute, public process: ProcessService, public parametersSrv: ParametersService ) {
}

  ngOnInit() {
      this.task.operations = [];
      this.OPTYPE = this.parametersSrv.getOperationType();
       /*
      this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
      console.log('11111');
    }); */
  }


  newOperation() {

   const op:  Operation = {id: '1', name: '.', type:  null, actionList: null, tool: null , part: null, workingArea: null, parameters: null};
   this.task.operations.push(op);
  }
}
