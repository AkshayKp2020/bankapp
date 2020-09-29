import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from  '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  acno="";
  amount="";
  pinn="";
  acno1="";
  pinn1="";
  amount1="";
  amount2=0;


  deposit() {


    var accno = this.acno
    var pinnum = this.pinn
    var amount = this.amount
 
    var data = this.dataService.accountDetails;
    if (accno in data) {
        let mpin = data[accno].pin;
        if (pinnum == mpin) {
            data[accno].balance= amount;
            alert("Depostie Successfull!")
            alert("Account Has been Credited with Rs: " + data[accno].balance)
        } else {
            alert("Wrong Account Number or Pin")
        }
    }
    else{
      alert("Invalid Account number");
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
  constructor(private _router: Router, public dataService: DataService) { }

  ngOnInit(): void {
  }

}
  