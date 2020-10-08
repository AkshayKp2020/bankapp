import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from  '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pinn:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]]

  });

 
  
  acno1="";
  pinn1="";
  amount1="";
  amount2=0;


  deposit() {


    var accno = this.depositForm.value.acno
    var pinnum = this.depositForm.value.pinn
    var amount = this.depositForm.value.amount
 
    var data = this.dataService.accountDetails;
    if(this.depositForm.valid)
    {
      if (accno in data) {
        let mpin = data[accno].pin;
        if (pinnum == mpin) {
            data[accno].balance= amount;
            const result= this.dataService.deposit(this.depositForm.value.acno, this.depositForm.value.pin, this.depositForm.value.amount);
            alert("Depostie Successfull!")
            alert("Account Has been Credited with Rs: " + data[accno].balance)
        } else {
            alert("Wrong Account Number or Pin")
        }
    }
    else
    {
      alert("Invalid Account number");
    }
    }
    
  }
 
 widraw() {
    alert("Widraw Successfull!")

    var accno = this.acno1
    var pinnum1 = this.pinn1
    var amount1 = parseInt(this.amount1)
    
    var data = this.dataService.accountDetails;
    if (accno in data) {
        let mpin1 = data[accno].pin;
        if (pinnum1 == mpin1) {
         
          data[accno].balance = amount1;
          
          alert(data[accno].balance + " Has Been Debited from your Account")
          
         
    }
    else{
      alert("Invalid Account number");
}
 }
 }
  constructor(private _router: Router, public dataService: DataService, private fb:FormBuilder ) { }
  getError(accno)
  {
    return (this.depositForm.get(accno).touched||this.depositForm.get(accno).dirty)&&this.depositForm.get(accno).errors
  }

  ngOnInit(): void {
  }

}
  