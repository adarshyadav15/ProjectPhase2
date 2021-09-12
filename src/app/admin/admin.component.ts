import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Itemadd } from './itemadd';
import { Menu } from './menu';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //items?:Menu[];
  itemadd?:Itemadd[];
  //temp?:Itemadd;
  temp:Product={id:0,name:"",price:0,description:""};

  name:string='';
  price:number=0;
  products = products;
  deleted:Product[]=new Array<Product>();
  nameEdit: string="";
  priceEdit: number=0;
  itExists:boolean=false;
  constructor(private cartService:CartService) {
        
    this.itemadd=new Array<Itemadd>();
   }
  remove(x:Product){
   if(confirm("Are you sure to delete ?"))
   {
    
    this.products=this.products.filter(e => e.name !== x.name)
    //this.temp=new Itemadd(x.name,x.price);
    //this.itemadd?.push(this.temp);
    this.deleted?.push(x)
   }
  }
  add(x:Product)
  {
    this.products.push(x);
    this.deleted=this.deleted.filter(e => e.name !== x.name)

    //this.temp=new Itemadd(x.name,x.price);

    // this.products?.push(x);
    // this.itemadd=this.itemadd?.filter(y=>y.itemName!==x.name);
  }
  addNew()
  {
    this.temp.name=this.name;
    this.temp.price=this.price;
    this.products.push(this.temp);
    // this.temp=new Menu(this.name,this.price);
    // this.items?.push(this.temp);
  }
  editItem()
  {
    this.temp.name=this.nameEdit;
    this.temp.price=this.priceEdit;
    
    this.products=this.products.filter(e => e.name !== this.nameEdit)
    this.products.push(this.temp);
      // this.temp=new Menu(this.nameEdit,this.priceEdit);
      // this.items=this.items?.filter(y=>y.itemName!==this.nameEdit)
      // this.items?.push(this.temp)


  }
  ngOnInit(): void {
  }

}
