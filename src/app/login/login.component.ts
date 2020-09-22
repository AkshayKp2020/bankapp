import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from  '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
   
accno="";
pwd="";
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


  constructor(private router: Router, private dataService: DataService ) { }

 
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
          alert("Invalid Password ")
      }

  } else {
      alert(" Account  Number  Doesnt Exist")
  }
}


}
