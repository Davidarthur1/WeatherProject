import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
 
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  myWeather: any;
  currentTime = new Date();
  fiveDayForecastApiResponse: any;
  cities: string[] = ['London', 'Cardiff', 'Birmingham'];
  cityForecast: any = {};
  
  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
  }

onButtonClick(cityName:string): void{
  console.log(cityName);
  this.weatherService.fivedayforecast(cityName).subscribe({

    next:(res) => {
      console.log('Response from API:', res)
      this.fiveDayForecastApiResponse = this.filterForecastData(res);
      console.log(this.myWeather);

    },

    error: (error) => console.log(error.message),

    complete: () => console.info('API call completed')
  })
}

filterForecastData(data: any): any[] {
  const filteredData = [];
  const intervalsPerDay = 8; //one entry for every 3 hour interval

  for (let i = 0; i < data.list.length; i+= intervalsPerDay) {
    filteredData.push(data.list[i]);
  }

  return filteredData;
}


}
