import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

// componenta pentru listarea tuturor locatiilor din care se poate selecta una
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  
  weathers: Weather[] = []; // vectorul cu toate locatiile si detaliile pentru fiecare

  // folosim un serviciu "weatherService" pentru a face request la date, 
  // si facem subscribe la acest serviciu pentru a extrage lista de locatii
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeathers();
  }

  getWeathers(): void {
    this.weatherService.getWeathers()
      .subscribe(weathers => this.weathers = weathers.list);
  }
}