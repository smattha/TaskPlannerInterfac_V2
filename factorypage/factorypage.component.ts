import { Component, OnInit } from '@angular/core';
import {ShopFloor, assline,Resource, PartInWorkingArea, Plan} from '../data.model';
import {ShopFloorService} from '../services/shopfloor.service';
import {GetAssLinesService} from '../services/get-ass-lines.service';
import {ResourcesService} from '../services/resources.service';
import {GetPartInworkingareaService} from '../services/get-part-inworkingarea.service'

@Component({
  selector: 'app-factorypage',
  templateUrl: './factorypage.component.html',
  styleUrls: ['./factorypage.component.css']
})
export class FactorypageComponent implements OnInit {

  shopfloor: String
  ShopFloorList: ShopFloor[]
  assLinesData: assline[]
  resourcesData: Resource[]
  partsData: PartInWorkingArea[]

  constructor(public srv: ShopFloorService , public srv2: GetAssLinesService , public srv3: ResourcesService, public srv4: GetPartInworkingareaService ) { }

  ngOnInit() {
    this.srv.ShopFloorCollections.subscribe( res => this.ShopFloorList = res );
  }


  onShopFloorShop(){
	this.srv2.getLinesData( this.shopfloor ).subscribe( res => this.assLinesData = res );
  }

  onClickWorkSpace(q:assline){
	console.log(" Assline" +q.id )
	this.srv3.getResourcesInWorkArea(q.id).subscribe(res => this.resourcesData = res  );

	this.srv4.getPartsInWorkArea(q.id).subscribe(res => this.partsData = res  );

}

}
