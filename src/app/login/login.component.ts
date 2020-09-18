import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public get router(): Router {
    return this._router;
  }
  public set router(value: Router) {
    this._router = value;
  }
   accountDetails = {
    1001: { name: "Akshay Kp", accno: 1001, pin: 5698, password: "user1", balance: 3000 },
    1002: { name: "Monachan", accno: 1002, pin: 5697, password: "user2", balance: 20000 },
    1003: { name: "Krishna Hari Dil", accno: 1003, pin: 5696, password: "user3", balance: 50000 },
    1004: { name: "Nandhu S Nair", accno: 1004, pin: 5695, password: "user4", balance: 25000 },
    1005: { name: "Alisha Jose", accno: 1005, pin: 5694, password: "user5", balance: 54000 },
    1006: { name: "Podi", accno: 1006, pin: 5555, password: "podi123", balance: 25000 },

}
accno="1001";
pwd="user1";
AccnoChange(event)
{
  alert("Account Number "+event.target.value+" Enterd Successfullly")
  this.accno=event.target.value
}
PassChange(event)
{
  alert("Password Enterd Successfully!")
  this.pwd=event.target.value
}


  constructor(private _router: Router) { }

 
  login()
  {
    
  
  var accno = this.accno
  var password = this.pwd
  var data = this.accountDetails
  if (accno in data) {
      let pwd = data[accno].password
      if (pwd == password) {
          alert("Successfull Login")
          this.router.navigateByUrl("dashboard")
      } else {
          alert("Account Numnber or Password Error! ")
      }

  } else {
      alert(" Account  Number  Doesnt Exist")
  }
}

}
