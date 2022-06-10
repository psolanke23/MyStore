import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
 
 checkoutForm=this.formBuilder.group({
   name:['',[Validators.required]],
   address:['',[Validators.required]]
 })

  constructor(private cartService:CartService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.items=this.cartService.getItems();
  }

  onSubmit(){
    if(this.checkoutForm.valid){
      window.alert("Your order has been submitted");
      console.log("placed Order : ",this.items);
      console.log(" Name : ",this.checkoutForm.value.name," Address : ",this.checkoutForm.value.address);
      this.items=this.cartService.clearCart();
      this.checkoutForm.reset();
      this.router.navigate(['/']);
    }else{
    alert(" 'Name' and 'Address' are mandatory !")
    }
  }

}
