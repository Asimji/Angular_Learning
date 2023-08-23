import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  dishes:any[]=[]

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b').subscribe((data:any)=>{
          this.dishes=data.meals
    })
  }

}
