import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})

export class CityWeatherComponent {
@Input() weather!:any;

}
