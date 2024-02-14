import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly cityMap: { [key: string]: any } = {
    London: {
        lat: 51.5073219,
        lon: -0.1276474,
    },
    Birmingham: {
        lat: 52.4862,
        lon: -1.8904,
    },
    Cardiff: {
        lat: 51.4837,
        lon: -3.1681,
    }
}; 

  constructor(private http: HttpClient) { 
}
  
  getweather(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b61fb5a124d60a4aa658f60350d01da0&units=' + units);
  }

  fivedayforecast(city: any): Observable<Object>{

return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.cityMap[city].lat}&lon=${this.cityMap[city].lon}&appid=b61fb5a124d60a4aa658f60350d01da0`);
  } 
}


