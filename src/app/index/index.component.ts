import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }
  title = 'project1';
  choice?:string

  showHome()
  {
    this.choice="home"
  }
  showCart()
  {
    this.choice="cart"
  }
  showAdmin()
  {
    this.choice="admin"
  }
  ngOnInit(): void {
  }

}
