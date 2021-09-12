import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  products = products;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  share() {
    window.alert('The product has been shared!');
  }
  ngOnInit(): void {
  }
  constructor(private cartService: CartService) { 
    
  }
  
}
