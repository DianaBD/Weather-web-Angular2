import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Data } from './data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  data$: Observable<Data>;

  constructor(
    private http: HttpClient
    ){ }

  //private weatherUrl = 'https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22';  // URL to web api
  private weatherUrl = 'assets/data.json';  // URL to web api
  // am incercat sa fac get direct la link dar primesc eroare CORS policy,
  //  si nu am putut rezolva nici folosind un proxy
  

  ngOnInit(){ }
  getWeathers(): Observable<Data> {
    // facem get la date si returnam un Observable, la care vor face subscribe
    // componentele ce au nevoie de aceste date
    this.data$ = this.http.get<Data>(this.weatherUrl);
    return this.data$;
    
  }
}

