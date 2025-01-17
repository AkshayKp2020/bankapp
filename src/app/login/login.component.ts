import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from  '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

LoginForm = this.fb.group
({
  accno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
  pwd:['',[Validators.required,]],
} )  



  constructor(private router: Router, private dataService: DataService, private fb:FormBuilder  ) { }
  getError(accno)
  {
    return (this.LoginForm.get(accno).touched||this.LoginForm.get(accno).dirty)&&this.LoginForm.get(accno).errors
  }
  
 
  login()
  
 {

  
  
  var accno = this.LoginForm.value.accno
  var password = this.LoginForm.value.pwd
  var data = this.dataService.accountDetails
  if(this.LoginForm.valid)
  {
  if (accno in data) {
      let pwd = data[accno].password
      if (pwd == password) {
          alert("Successfull Login")
          this.router.navigateByUrl("dashboard")
          const result= this.dataService.login(this.LoginForm.value.accno, this.LoginForm.value.pwd);
      }
       else {
          alert("Invalid Password ")
      }

  } else {
      alert(" Account  Number  Doesnt Exist")
  }
}

 }

}
