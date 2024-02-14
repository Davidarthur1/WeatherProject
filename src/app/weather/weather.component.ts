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
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  windspeed: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'London';
  units: string = 'metric';
  lat: number = 0;
  lon: number = 0;
  fiveDayForecastApiResponse: any;

  
  constructor(private weatherService: WeatherService, private http: HttpClient)
   {
   }
  ngOnInit(): void {
    // this.weatherService.getweather(this.city, this.units).subscribe({

    //   next:(res) => {
    //     console.log(res)
    //     this.myWeather = res;
    //     console.log(this.myWeather);
    //     this.temperature = this.myWeather.main.temp;
    //     this.feelsLikeTemp = this.myWeather.main.feels_like;
    //     this.humidity = this.myWeather.main.humidity;
    //     this.windspeed = this.myWeather.wind.speed;
    //     this.summary = this.myWeather.weather[0].main;
    //     this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
    //   },

    //   error: (error) => console.log(error.message),

    //   complete: () => console.info('API call completed')
    // })
  }

['onButtonClick'](cityName:string){
  console.log(cityName);
  this.weatherService.fivedayforecast(cityName).subscribe({

    next:(res) => {
      console.log(res)
      this.fiveDayForecastApiResponse = res;
      console.log(this.myWeather);
      // this.temperature = this.myWeather.main.temp;
      // this.feelsLikeTemp = this.myWeather.main.feels_like;
      // this.humidity = this.myWeather.main.humidity;
      // this.windspeed = this.myWeather.wind.speed;
      // this.summary = this.myWeather.weather[0].main;
      // this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
      // this.city = cityName;
      // this.lat = this.myWeather.city.coord.lat;
      // this.lon = this.myWeather.city.coord.lon;
    },

    error: (error) => console.log(error.message),

    complete: () => console.info('API call completed')
  })
}

readonly cities: string[] = ['London', 'Cardiff', 'Birmingham'];


// fiveDayForecast(){
  
//       return this.http.get('http://api.openweathermap.org/data/2.5/forecast?lat=cityMap.city.lat&lon=cityMap.city.lon&appid=b61fb5a124d60a4aa658f60350d01da0}',)
//     }
//   
}