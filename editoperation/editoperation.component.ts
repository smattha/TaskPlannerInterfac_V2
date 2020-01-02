import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import {OperationsService } from '../services/operationssevice.service';
import { Answer, Process, Parameters, Operation, Actions, Tool, Part, WorkingArea } from '../data.model';
import { ActionsService } from '../services/actions.service';
import {ToolsService} from '../services/tools.service';
import {PartsService} from '../services/parts.service';
import {WorkingareaService} from '../services/workingarea.service';
import {ParametersService} from '../services/parameters.service';

@Component({
  selector: 'app-editoperation',
  templateUrl: './editoperation.component.html',
  styleUrls: ['./editoperation.component.css']
})
export class EditoperationComponent implements OnInit {
    // public selectedOp: Operation;
    public actionsList: Actions[];
    selectedTool: string;
    selectedPart: string;
    public tools: Tool[];
    public parts: Part[];
    public workingAreas: WorkingArea[];
    public selectedWorkingArea: WorkingArea;
    public parameters: Parameters[];
    public workingArea: String;
    public tool: String;
    public part: String;
 @ Input() selectedOp: Operation;
  constructor(
       public operationService: OperationsService,
        public toolSrv: ToolsService, private partsSrv:  PartsService,
        private workingAreaSrv: WorkingareaService, private  parametersSrv: ParametersService
    ) {


     }

  ngOnInit() {

    console.log('on init ');

    // this.selectedOp = this.operationService.operationSelected;
    this.partsSrv.obsParts.subscribe( res => this.parts = res );

    this.toolSrv.toolCollections.subscribe(res => this.tools = res );

     this.parameters = this.parametersSrv.getActionsForOperationsType( this.selectedOp.type);

     this.workingAreaSrv.WorkingAreaCollections.subscribe(res => this.workingAreas = res );

     console.log(this.selectedOp.type);

    }
public onChangeWork() {
 this.selectedOp.workingArea = this.workingAreas.filter(x => this.workingArea === x.name )[0].id;
}

public onChangeTool() {
 this.selectedOp.tool = this.tools.filter(x => this.tool === x.name )[0].id;
}

public onChangePart() {
 this.selectedOp.part = this.parts.filter(x => this.part === x.name )[0].id;
}
   update() {

    console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq');

    console.log(this.selectedOp.type);

    this.selectedOp.parameters = this.parametersSrv.getActionsForOperationsType( this.selectedOp.type);

     console.log(this.selectedOp.type);

     console.log('on init Completed');

   }
}
