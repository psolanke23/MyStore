import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  constructor() {}

  ngOnInit() {}

  share() {
    alert('The Product has been shared !');
  }
  
  onNotify(){
    alert('You will be notified when the product goes on sale');
  }


}
