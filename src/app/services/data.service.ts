import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails = {
    1001: { name: "Akshay Kp", accno: 1001, pin: 5698, password: "user1", balance: 3000 },
    1002: { name: "Monachan", accno: 1002, pin: 5697, password: "user2", balance: 20000 },
    1003: { name: "Krishna Hari Dil", accno: 1003, pin: 3333, password: "3333", balance: 10 },
    1004: { name: "Nandhu S Nair", accno: 1004, pin: 5695, password: "user4", balance: 25000 },
    1005: { name: "Alisha Jose", accno: 1005, pin: 5694, password: "user5", balance: 54000 },
    1006: { name: "Podi", accno: 1006, pin: 5555, password: "podi123", balance: 25000 },

}

CurrentUser;
  constructor() { this.saveDetails()}

  saveDetails()
  {
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    localStorage.setItem("CurrentUser",JSON.stringify(this.CurrentUser))

  }
  getDetails()
  {
    if(localStorage.getItem("accountDetails"))
    {
      this.accountDetails=JSON.parse( localStorage.getItem("accountDetails"));
    }
   if(localStorage.getItem("CurrentUser"))
   {
    this.CurrentUser=JSON.parse(localStorage.getItem("CurrentUser"));
   }

  }

  register(name,accno,pin,password,)
  {
    if (accno in this.accountDetails) {
      alert("Account Number Already Exist, Please Login");
      return ;
    }
    
   
    this.accountDetails[accno]={
      name,
      accno,
      pin,
      password,
      balance:0
    }
    this.saveDetails();
        return true;
  }
  login(accno,password)
  {
    var data = this.accountDetails
  {
  if (accno in data) {
      let pwd = data[accno].password
      if (pwd == password) {
        this.CurrentUser=data[accno]
        this.saveDetails();
        return true;

  }

  }
}
  }
  deposit(acno,pinn,amount)
  {
    var accno = acno
    var pinnum = pinn
    var amount = amount
    var data = this.accountDetails;
      if (accno in data) {
        let mpin = data[accno].pin;
        if (pinnum == mpin) {
          this.saveDetails();    
            return true;
        }
      }

}
widraw(acno1,pinn1,amount1)
{
  var accno = acno1
    var pinnum1 = pinn1
    var amount1=amount1
    var data = this.accountDetails;
    if (acno1 in data) {
        let mpin1 = data[accno].pin;
        if(data[accno].balance<amount1)
        {
          alert("Insufficent Balance!")
          return
        }

        else if (pinn1 == mpin1) {
          data[accno].balance-= amount1;
          this.saveDetails();
return true;
        }

      }
    }
  }