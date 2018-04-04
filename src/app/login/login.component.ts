import {Component, OnInit,NgModule, ElementRef} from '@angular/core';
import { CommonService } from '../Services/CommonService';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
   public email:string;
   public password:string;
   public role:string;
	    constructor(
        private http: Http,
        private common_service : CommonService
        ) 
        {
        	console.log("11")
        	this.login();
        }

    login() {
   	var body = {
        email:this.email,
        password:this.password,
        role:this.role
      }
console.log("11111111")
    return this.http.post(`http://192.168.0.168:4009/exchanges/api/v1/user/login`,body)
    .subscribe((Response) => {console.log(Response.json())});
  }

  ngOnInit() {
  }

}
