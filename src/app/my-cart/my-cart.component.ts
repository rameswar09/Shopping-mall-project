import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  quantity = ''
  cartImgUrl = 'https://itangle.co/wp-content/uploads/2016/03/trolly.png'
  myUser = JSON.parse(localStorage.getItem('user'))
  myCart = JSON.parse(localStorage.getItem('user')).myCart;
  onChange = (event, item, i) => {
    let obj = this.myCart;
    obj[i].quantity = event.target.value;
    let totalPrice = (parseInt(obj[i].price, 10) * event.target.value)
    obj[i].totalPrice = totalPrice
    this.myCart = obj;
    this.myUser.myCart = this.myCart
    localStorage.setItem('user', JSON.stringify(this.myUser));
  }
  constructor() {
  }
  ngOnInit() {
  }

}
