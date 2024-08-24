import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent {
  info: any[] = [];

  constructor(private locationService : LocationService){
    this.academias();
  }
  
  academias(){
    this.locationService.obter().subscribe(i => console.log(i))
    console.log(this.info)
  }
}
