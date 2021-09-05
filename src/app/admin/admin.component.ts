import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Itemadd } from './itemadd';
import { Menu } from './menu';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items?:Menu[];
  itemadd?:Itemadd[];
  temp?:Itemadd;
  name?:string;
  price?:number;
  nameEdit: string | undefined;
  priceEdit: number | undefined;
  itExists:boolean=false;
  constructor() {
    this.items=new Array<Menu>(
      new Menu("Paneer",150),
      new Menu("pasta",110)
    )
    this.itemadd=new Array<Itemadd>();
   }
  remove(x:Menu){
   if(confirm("Are you sure to delete ?"))
   {
     
    this.temp=new Itemadd(x.itemName,x.itemPrice);
    this.itemadd?.push(this.temp);
    this.items=this.items?.filter(y=>y.itemName!==x.itemName)
   }
  }
  add(x:Menu)
  {
    this.temp=new Itemadd(x.itemName,x.itemPrice);
    this.items?.push(this.temp);
    this.itemadd=this.itemadd?.filter(y=>y.itemName!==x.itemName);
  }
  addNew()
  {
    this.temp=new Menu(this.name,this.price);
    this.items?.push(this.temp);
  }
  editItem()
  {
      this.temp=new Menu(this.nameEdit,this.priceEdit);
      this.items=this.items?.filter(y=>y.itemName!==this.nameEdit)
      this.items?.push(this.temp)

  }
  ngOnInit(): void {
  }

}
