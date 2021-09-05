import { Component, OnInit } from '@angular/core';
import { Menu } from '../admin/menu';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items?:Menu[]
  constructor() { }
  addToCart()
  {
    
  }
  ngOnInit(): void {
  }

}
