import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.scss']
})
export class CityPageComponent implements OnInit {

public name: string;
public temperature: number;

  constructor(
   private route: ActivatedRoute,
   private  http: HttpClient
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(p => {
            this.name = p.name;
            const key = '0460852435eb0d7ecc6d8d65e5dbfeff';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=${key}&units=metric`;
            this.http.get(url).subscribe((response: any) => {
                    this.temperature = response.main.temp;
            });
      });



  }

}
