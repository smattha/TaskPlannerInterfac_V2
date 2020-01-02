
import {Component, OnInit, Inject} from '@angular/core';
import {MdDialog } from '@angular/material';
import {Router} from '@angular/router';
import {ActionsService} from '../services/actions.service';

import { Observable } from 'rxjs/';
import { Process, Plan} from '../data.model';
import {ProcessService} from '../services/process.service';
import {PlanService} from '../services/plan.service';

interface ChuckNorrisWisdom {
  name: string;
  id: string;
  }

@Component({
  selector: 'app-dwm-process-page',
  templateUrl: './dwm-process-page.component.html',
  styleUrls: ['./dwm-process-page.component.css']
})
export class DwmProcessPageComponent implements OnInit {
    plan: string;
    processList: Process[];
	planList: Plan[];
	viewTask: boolean;
  public chuckNorrisWisdom: ChuckNorrisWisdom;

  constructor( public actions: ActionsService, public process: ProcessService, public planSrv: PlanService,
    private router: Router, public dialog: MdDialog) {}

  ngOnInit() {

    this.planSrv.PlanCollections.subscribe( res => this.planList = res );
}

  selectProcess(processId: string) {
    this.process.selected = this.process.selected ;
    this.router.navigate([`/process/${processId}`]);
  }

  viewResource() {
      this.router.navigate([`/resources`]);
  }

  public onChangePlan() {
  this.process.getProcessesOfPlan( this.plan ).subscribe(res => this.processList = res);
  }

  public viewTasks() {
     this.process.selected = this.plan;
	//this.router.navigate([`/tasks0/`]);
	this.viewTask=true;
  }



}
