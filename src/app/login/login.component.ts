import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string='';
  pwd:string='';
  users=[
    {"uname":"admin","pwd":"1234"},
  ];
  constructor (private _router:Router)
  {

  }
  validateUser(){
    if ( this.users.find(x=>x.uname==this.uname && x.pwd==this.pwd))
      {     
        //this.msg='Credentails validated and found correct...';
        this._router.navigate(['admin']);
      }    else  this.msg='Invalid input credentials...';
  }
  msg:string="";




  ngOnInit(): void {
  }

}
