import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title = 'angularWorkshop';

  public now = new Date();
 
 
  public cities = [
    {name:'Anvers', tooltip:'Anvers, Belgium'},
    {name:'Brussel', tooltip:'Brussel, Belgium'},
    {name:'Liege', tooltip: 'Liege Belgium'}
  ]
 
  public raiseAlert() {
    alert('HELLO !');
  }

}
