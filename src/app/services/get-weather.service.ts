import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http:HttpClient) { }
  getWeatherRequest(city:string){
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${city}`)
  }
}
