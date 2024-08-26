import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { LocationModel } from 'src/app/models/location.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent{
  public Object = Object;
  lugar : string = "";
  info? : Observable<LocationModel[]> | null;

  constructor(private locationService : LocationService){
    this.info = this.locationService.obterTodos();
  }

  onEnter(event : Event) : void{
    this.academias();
  }
  
  academias(){
    this.info = this.locationService.obter(this.lugar);
  }
}
