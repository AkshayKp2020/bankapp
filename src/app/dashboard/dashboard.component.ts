import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accountDetails = {
    1001: { name: "Akshay Kp", accno: 1001, pin: 5698, password: "user1", balance: 3000 },
    1002: { name: "Monachan", accno: 1002, pin: 5697, password: "user2", balance: 20000 },
    1003: { name: "Krishna Hari Dil", accno: 1003, pin: 5696, password: "user3", balance: 50000 },
    1004: { name: "Nandhu S Nair", accno: 1004, pin: 5695, password: "user4", balance: 25000 },
    1005: { name: "Alisha Jose", accno: 1005, pin: 5694, password: "user5", balance: 54000 },
    1006: { name: "Podi", accno: 1006, pin: 5555, password: "podi123", balance: 25000 },

}
  acno="1001";
  amount="";
  pinn="5698";
  acno1="1001";
  pinn1="5698";
  amount1="";


  deposit() {


    var accno = this.acno
    var pinnum = this.pinn
    var amount = this.amount
    var data = this.accountDetails;
    if (accno in data) {
        let mpin = data[accno].pin;
        if (pinnum == mpin) {
            data[accno].balance = amount;
            alert("Depostie Successfull!")
            alert("Account Has been Credited with Rs: " + data[accno].balance)
        } else {
            alert("Wrong Account Number or Pin")
        }
    }
  }
 
 widraw() {
    alert("Widraw Successfull!")

    var accno = this.acno1
    var pinnum1 = this.pinn1
    var amount1 = this.amount1
    var data = this.accountDetails;
    if (accno in data) {
        let mpin1 = data[accno].pin;
        if (pinnum1 == mpin1) {
            data[accno].balance = amount1;
            alert(data[accno].balance + " Has Been Debited from your Account")


        }
    }
}

  constructor() { }

  ngOnInit(): void {
  }

}
