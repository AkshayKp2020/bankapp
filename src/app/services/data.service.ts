import { Injectable } from '@angular/core';

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

  constructor() { }
  register(name,accno,pin,password,)
  {
    if (accno in this.accountDetails) {
      alert("Account Number Already Exist, Please Login");
      return
    }
    
   
    this.accountDetails[accno]={
      name,
      accno,
      pin,
      password,
      balance:0
    }
  }
  }

