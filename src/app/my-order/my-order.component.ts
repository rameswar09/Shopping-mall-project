import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  myCart = '';
  constructor() { }

  ngOnInit() {
    this.myCart = JSON.parse(localStorage.getItem('user')).myCart;
    console.log(this.myCart)
  }

}
