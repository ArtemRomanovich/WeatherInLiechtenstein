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
  //http://api.openweathermap.org/data/2.5/group?id=3042033,3042035,3042041,3042055,3042068,3042073&units=metric&appid=f39d6aece235c5518ac1422bd081a2a7

  constructor(private http: Http) {

  }

  extWeather(event){
    console.log(event.explicitOriginalTarget.id);
    for(let city of this.cityes){
      if(event.explicitOriginalTarget.id == city.id){
        console.log(city.name);
        this.extendedWeather = {
          nameCity: city.name,
          description: city.weather[0].description,
          icon: 'http://openweathermap.org/img/w/'+ city.weather[0].icon +'.png' ,
          main: city.weather[0].main,
          headerWind: 'Wind',
          windSpeed: 'Degree: '+city.wind.speed,
          windDegree: 'Speed: '+city.wind.deg,

        }
      }
    }
    console.log(this.extendedWeather);
  }

  ngOnInit() {
    this.http.get('http://api.openweathermap.org/data/2.5/group?id=3042033,3042035,3042041,3042055,3042068,3042073&units=metric&appid=f39d6aece235c5518ac1422bd081a2a7')
          // Call map on the response observable to get the parsed people object
          .map(res => res.json())
          // Subscribe to the observable to get the parsed people object and attach it to the
          // component
          .subscribe(data => {
          // this.result = data;
          // for(let i = 0;i>=5;i++){
          //   this.city = {
          //     name: this.result.list[i].name,
          //     temp: this.result.list[i].main.temp
          //   };
          //   this.cityes.push({'name': this.result.list[i].name,'temp': this.result.list[i].main.temp});
          //
          // }
          this.cityes = data.list;
          console.log(this.cityes);

        });
  }

}
