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
  accno:['',[Validators.required,Validators.minLength(4)]],
  pwd:['',[Validators.required]],
  pin:['',[Validators.required]]
});

  constructor(private router: Router, private dataService: DataService, 
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getError(name)
  {
    return (this.registerForm.get(name).touched||this.registerForm.get(name).dirty)&&this.registerForm.get(name).errors
  }
  register()
  {
    if(this.registerForm.valid)
   {
   alert("account Successfully Created Please Login")
   this.router.navigateByUrl("");
  const result= this.dataService.register(this.registerForm.value.name, this.registerForm.value.accno, this.registerForm.value.pin,this.registerForm.value.pwd);
    
  }
  else
    {
      alert("password should be of minimum 3 characters")
    
    }

}
}
