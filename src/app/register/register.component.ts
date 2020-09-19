import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name="";
accno="";
pwd="";
pin="";


  constructor(private dataService : DataService, private _router: Router) { }

  ngOnInit(): void {
  }
  register()
  {
    this._router.navigateByUrl("");
   const result= this.dataService.register(this.name, this.accno, this.pin,this.pwd);
    
  }

}
