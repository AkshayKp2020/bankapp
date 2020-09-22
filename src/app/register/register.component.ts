import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // name="";
  // accno="";
  // pwd="";
  // pin="";
registerForm =this.fb.group
({
  name:['',[Validators.required]],
  accno:[''],
  pwd:[''],
  pin:['']
});

  constructor(private router: Router, private dataService: DataService, 
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    
    console.log(this.registerForm.value);
   alert("account Successfully Created Please Login")
   this.router.navigateByUrl("");
  const result= this.dataService.register(this.registerForm.value.name, this.registerForm.value.accno, this.registerForm.value.pin,this.registerForm.value.pwd);
    
  }

}
