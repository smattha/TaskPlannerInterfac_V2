import { Injectable } from '@angular/core';
import { Plan , serverIp} from '../data.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlanService {

public selected: String;
  private idCounter;
  public PlanCollections: Observable<Plan[]> ;

  public newPlan: Plan ;

  public PlanCollections1: Plan[] ;

  private selectPlan: Plan;


  constructor( private http: HttpClient ) {
    this.idCounter = 0;

    this.PlanCollections = this.getPlans();

    this.PlanCollections.subscribe(res => this.PlanCollections1 = res);
    // this.newPlan = Plan ;

}


storePlan(): Observable<Plan> {

   console.log('Before Store value post =1');
   console.log(JSON.parse(JSON.stringify(this.newPlan)));
   const s1 = JSON.parse(JSON.stringify(this.newPlan));
  return this.http.post<Plan>( serverIp.ip + '/storedb',   JSON.stringify(s1)) ;
}


public getPlans(): Observable<Plan[]> {
    return this.http.get< Plan[]> ( serverIp.ip + '/plan') ;
}



  getAction(id: string): Plan  {

    console.log(id);
     // this.PlanCollections.map(col => col.find(PlanSelected => PlanSelected.id === id));

     this.selectPlan = this.PlanCollections1.find(PlanSelected => PlanSelected.id === id);
     console.log('333333333333333333333333');
     console.log(this.PlanCollections1);
          console.log(this.getPlans);

     return this.selectPlan ;
}


}
