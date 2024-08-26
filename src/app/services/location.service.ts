import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { LocationModel } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private client : HttpClient;
  private api : string = environment.api;

  constructor(_client: HttpClient) { 
    this.client = _client;
  }

  obter(id : string){
    if (!id.trim()) {
      return null;
    }

    return this.client.get<LocationModel[]>(this.api + "/locate/" + id + "&countrycodes=BR&limit=3&addressdetails=1");
  }

  obterTodos(){
    return this.client.get<LocationModel[]>(this.api + "/locate");
  }
}
