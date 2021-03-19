import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WeatherService } from '../weather.service';
import { Data } from '../data';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})

// componenta prin care afisam wremea pentru locatia selectata
export class WeatherDetailComponent implements OnInit {
  weather? : Weather; // vremea pentru locatia selectata
  math = Math; // pentru a afisa valorile rotunjite
  min: number;  //temperatura generala
  temp: number; //temperatura minima
  max: number; //temperatura maxima

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService, // pentru a extrage locatia si detaliile ei din vectorul de date
    //private location: Location, // o foloseam pt un buton de back, nu mai e nevoie
    public dialog: MatDialog //pop-up pentru harta
  ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() : void {
    // convertim idul(string) extras din ruta, la number
    const id = +this.route.snapshot.paramMap.get('id');

    // cautam id-ul locatiei in vectorul de date, pentru a obtine detaliile de vreme ale locatiei
    this.weatherService.getWeathers()
      .subscribe(weathers => {
        this.weather = weathers.list.find(w => w.id === id); 
        console.log(this.weather.coord.lon);
        this.temp = this.weather.main.temp;
        this.min = this.weather.main.temp_min;
        this.max = this.weather.main.temp_max;
      });
  }
  // goBack(): void {
  //   this.location.back();
  // }

  // functie de gestionare pt popup-ul cu harta
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: this.weather
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
