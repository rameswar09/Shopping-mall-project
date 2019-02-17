import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userdata = '';
  totalPrice = 0;
  constructor() { }

  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem('user'));
    this.userdata.myCart.map((item) => {
      this.totalPrice = this.totalPrice + item.totalPrice;
    });
    console.log(this.totalPrice);
  }

}
