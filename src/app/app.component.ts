import { Component } from '@angular/core';
import { GetWeatherService } from './services/get-weather.service';
import { Observable } from 'rxjs/internal/Observable';
import { weather } from './weather.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName!:string;
  getWeather$!:Observable<any>;
  title = 'weather-app';
  weather!:any;
  constructor(private getWeather:GetWeatherService){}

  findWeather(){
    console.log("calling")
     this.getWeather.getWeatherRequest(this.cityName).subscribe((data:any)=>{
     this.weather=data;
     console.log(this.weather);
     })
  };
}
