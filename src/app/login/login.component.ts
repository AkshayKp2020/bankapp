import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from  '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public get dataService(): DataService {
    return this._dataService;
  }
  public set dataService(value: DataService) {
    this._dataService = value;
  }
  public get router(): Router {
    return this._router;
  }
  public set router(value: Router) {
    this._router = value;
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


  constructor(private _router: Router, private _dataService: DataService ) { }

 
  login()
  {
    
  
  var accno = this.accno
  var password = this.pwd
  var data = this.dataService.accountDetails
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
Register()
{
  alert("Successfully Verified")
}

}
