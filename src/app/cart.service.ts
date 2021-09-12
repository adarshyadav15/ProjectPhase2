import { Injectable } from '@angular/core';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Product[] = [];
  name?:string;
  address?:string;
  /* . . . */
  
    addToCart(product: Product) {
      this.items.push(product);
    }
    remove(x?:string)
    {
      this.items=this.items?.filter(y=>y.name!==x)
    }
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
    getName(){
      return this.name;
    }
    getAddress(){
      return this.address;
    }
    getLength()
    {
      return this.items.length;
    }
  /* 
  . . . */
}
