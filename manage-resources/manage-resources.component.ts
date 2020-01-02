import { Component, OnInit, Input, SystemJsNgModuleLoader } from '@angular/core';
import {ResourcesService } from '../services/resources.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource, Answer, Process, Parameters, Operation, Actions, Tool, Part, WorkingArea } from '../data.model';


@Component({
  selector: 'app-manage-resources',
  templateUrl: './manage-resources.component.html',
  styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {

	public resources: Resource[];
	 public newResources: Resource[];
  constructor(public resSRV: ResourcesService,   private router: Router,  public route: ActivatedRoute ) {
       this.resSRV.resourceCollections.subscribe(res => this.resources = res );
  }

  ngOnInit() {
  }
     public back() {
     this.router.navigate([`/process/1`]);

	}
	
	update()
	{
		this.resSRV.resource= this.resources;
		this.resSRV.storeProcess().subscribe( res => this.newResources = res)
		console.log(this.resources);
	}

	up(r: Resource)
	{
		
		r.availability=!r.availability;
	}
}
