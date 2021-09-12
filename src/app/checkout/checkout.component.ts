import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items = this.cartService.getItems();
  name=this.cartService.getName();
  address=this.cartService.getAddress();
  sum:number=0;
  home()
  {
    this.router.navigate(['index'])
  }
  
  getSum() :number{
    this.sum=0;
    for(let item of this.items){
      this.sum+=item.price
    }
    return this.sum
  }

  constructor(private cartService: CartService,
    private router:Router
    ) {
  
  }
  ngOnInit(): void {
    
  }

}
