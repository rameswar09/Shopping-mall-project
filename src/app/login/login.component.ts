import { Component, OnInit } from '@angular/core';
import {data} from '../service.database';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  obj = {
     username: '',
     password: '',
     myCart: [],
     data: ''
  };
  url = 'https://www.evvivabrands.com/wp-content/uploads/2018/08/flipkart.png';
  flipkart = 'https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png';

  constructor() { }
  onChangeEmail = (event) => {
    this.username = event.target.value;
  }
  onChangePassword = (event) => {
    this.password = event.target.value;
  }
  onClickLogin = () => {
    console.log('hello');
    this.obj.username = this.username;
    this.obj.password = this.password;
    localStorage.setItem('user', JSON.stringify(this.obj));
    localStorage.setItem('database', JSON.stringify(data));
    console.log(this.obj);
    console.log(data);
  }

  ngOnInit() {
  }

}
