import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  //city: Object;
  cityes: Array<any>;
  result: any;
  extendedWeather: Object = {
    nameCity: '',
    description: '',
    icon: '' ,
    main: '',
    headerWind: '',
    windSpeed: '',
    windDegree: '',
  }
  nHeaderWeather: Object = {
    nHeaderTemp: 'Temperature: ',
    nTemp: 'Now: ',
    nTempMax: 'Max: ',
    nTempMin: 'Min: ',
    nHeaderHum: 'Humidity: ',
    nHumidity: ' %',
    nHeaderGrnd: 'Ground level: ',
    nGrndLvl: 'hPa',
    nHeaderSea: 'Sea level: ',
    nSeaLvl: 'hPa',
    nHeaderWtDesc: 'Descpription: ' ,
    nHeaderWtSpeed: 'Wind speed: ',
    nWiSpeed: ' m/s.',
  };
  dayWeather: Array<Object>;
  //http://api.openweathermap.org/data/2.5/group?id=3042033,3042035,3042041,3042055,3042068,3042073&units=metric&appid=f39d6aece235c5518ac1422bd081a2a7

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getCity();

  }

  getCity(){
    this.http.get('http://api.openweathermap.org/data/2.5/group?id=3042033,3042035,3042041,3042055,3042068,3042073&units=metric&appid=f39d6aece235c5518ac1422bd081a2a7')
          .map(res => res.json())
          .subscribe(data => {
          this.cityes = data.list;
        });

  }
  //api.openweathermap.org/data/2.5/group?id=3042033,3042035,3042041,3042055,3042068,3042073
  extWeather(event){
    for(let city of this.cityes){
      if(event.explicitOriginalTarget.id == city.id){
              this.getExtWeather(city.id);
              this.extendedWeather = {
                nameCity: city.name,
                description: city.weather[0].description,
                icon: 'http://openweathermap.org/img/w/'+ city.weather[0].icon +'.png' ,
                main: city.weather[0].main,
                headerWind: 'Wind',
                windSpeed: 'Speed: '+city.wind.speed +' m/s.',
              }
            }
          }
        }

    getExtWeather(id){
      this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+id+'&units=metric&appid=f39d6aece235c5518ac1422bd081a2a7')
            .map(res => res.json())
            .subscribe(data => {
              this.dayWeather = data.list;
      });
    }
  }
