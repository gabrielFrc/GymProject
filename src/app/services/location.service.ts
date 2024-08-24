import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private client : HttpClient;
  private api : string = environment.api;

  constructor(_client: HttpClient) { 
    this.client = _client;
  }

  obter(){
    return this.client.get<any>(this.api + "/weatherforecast");
  }
}
