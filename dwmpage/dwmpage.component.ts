import { Component, OnInit} from '@angular/core';
import { MdTabsModule } from '@angular/material';

@Component({
  selector: 'app-dwmpage',
  templateUrl: './dwmpage.component.html',
  styleUrls: ['./dwmpage.component.css']
})
export class DwmpageComponent implements OnInit {

 visibleDiv: String;
  constructor() { }

  ngOnInit() {
  }

  change( i: String)
  {
	  this.visibleDiv=i;
	console.log("variable "+ this.visibleDiv);
  }

   changed( i: String): Boolean
  {
	  //this.visibleDiv=i;
	console.log("variable "+ this.visibleDiv);
	return false;
  }
}
