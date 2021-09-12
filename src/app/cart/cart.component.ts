import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  user:any={}
  onSubmit(cart1:any): void {
    if(confirm("Do you Confirm the purchase ?"))
    {
   
   this.user=cart1.value
   this.cartService.name=this.user.name;
   this.cartService.address=this.user.address;
    //console.warn(this.user.name)
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.router.navigate(['checkout'])
    }

  }
  
  constructor(    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router:Router,
    
    ) { }

  ngOnInit(): void {
  }

}
