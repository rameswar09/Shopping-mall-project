import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
// import { ModalComponent } from '../modal/modal.component';
// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status = "mobile";
  myname = 'ramu';
  username: '';
  cartImgUrl = 'https://itangle.co/wp-content/uploads/2016/03/trolly.png'
  userdata: {};
  showData = JSON.parse(localStorage.getItem('database')).mobile;
  constructor(public dialog: MatDialog) { }
  onClickShow = (items) => {
    this.status=items
    this.showData = JSON.parse(localStorage.getItem('database'))[items];
    console.log(this.showData);
  }
  onChangeSearch = (event) => {
    // let data = new RegExp(event.target.value, "i");
    // console.log(data)
    this.showData = JSON.parse(localStorage.getItem('database'))[event.target.value];
  }
  onClick = (item) => {
    console.log(item)
    this.dialog.open(ShowComponent, {
      data: item
    });
  }
  // getColor = () => {
  //   return "red"
  // }
  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem('user'));
    console.log(typeof this.userdata);
    this.username = this.userdata.username;
    console.log(this.username);
    let data = JSON.parse(localStorage.getItem('user'));
    data = { ...data, myCart: [] };
    localStorage.setItem('user', JSON.stringify(data));
  }
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrls: ['./home.component.css']
})
export class ShowComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  select = ''
  onClickAddToCart = (itemDetails) => {
    itemDetails.quantity = this.select;
    itemDetails.totalPrice = (parseInt(itemDetails.price, 10) * this.select)
    console.log(itemDetails)
    let obj = {};
    obj = JSON.parse(localStorage.getItem('user'));
    obj.myCart.push(itemDetails);
    localStorage.setItem('user', JSON.stringify(obj));
  }
}
