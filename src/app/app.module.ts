import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { ProductAlertsComponent } from './core/product-alerts/product-alerts.component';
import { ProductListComponent } from './core/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './core/product-details/product-details.component';
import { CartComponent } from './core/cart/cart.component';
import { ShippingComponent } from './core/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent},
    { path: 'shipping', component: ShippingComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
