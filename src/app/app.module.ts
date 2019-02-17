import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent, ShowComponent} from './home/home.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyOrderComponent } from './my-order/my-order.component';
// import { ModalComponent } from './modal/modal.component';
const Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'myCart', component: MyCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'myOrder', component: MyOrderComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCartComponent,
    LoginComponent,
    ShowComponent,
    FooterComponent,
    CheckoutComponent,
    MyOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(Routes),
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule
  ],
  entryComponents: [ShowComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
