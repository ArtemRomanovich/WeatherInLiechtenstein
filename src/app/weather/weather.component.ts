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
  //http://api.openweathermap.org/data/2.5/group?id=3042033,3042035,3042041,3042055,3042068,3042073&units=metric&appid=f39d6aece235c5518ac1422bd081a2a7

  constructor(private http: Http) {

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
