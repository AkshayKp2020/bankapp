class Bank {
    static GetAccountDetails() {
        var accountDetails = {
            1001: { name: "Akshay Kp", accno: 1001, pin: 5698, password: "user1", balance: 3000 },
            1002: { name: "Monachan", accno: 1002, pin: 5697, password: "user2", balance: 20000 },
            1003: { name: "Krishna Hari Dil", accno: 1003, pin: 5696, password: "user3", balance: 50000 },
            1004: { name: "Nandhu S Nair", accno: 1004, pin: 5695, password: "user4", balance: 25000 },
            1005: { name: "Alisha Jose", accno: 1005, pin: 5694, password: "user5", balance: 54000 },
            1006: { name: "Podi", accno: 1006, pin: 5555, password: "podi123", balance: 25000 },

        }
        return accountDetails
    }
    static login() {
        var accno = document.querySelector("#accno").value;
        var password = document.querySelector("#password1").value;
        let data = Bank.GetAccountDetails()
        if (accno in data) {
            let password1 = data[accno].password
            if (password1 == password) {
                alert("Successfull Login")
                window.location.href = "userhome.html"
            } else {
                alert("Account Numnber or Password Error! ")
            }

        } else {
            alert(" Account  Number  Doesnt Exist")
        }
    }
    static deposit() {


        var accno = document.querySelector("#acno").value;
        var pinnum = document.querySelector("#pinn").value;
        var amount = Number(document.querySelector("#amount").value);
        var data = Bank.GetAccountDetails();
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
    static widraw() {
        alert("Widraw Successfull!")

        var accno = document.querySelector("#acno1").value;
        var pinnum1 = document.querySelector("#pinn1").value;
        var amount1 = Number(document.querySelector("#amount1").value);
        var data = Bank.GetAccountDetails();
        if (accno in data) {
            let mpin1 = data[accno].pin;
            if (pinnum1 == mpin1) {
                data[accno].balance = amount1;
                alert(data[accno].balance + " Has Been Debited from your Account")


            }
        }
    }


}