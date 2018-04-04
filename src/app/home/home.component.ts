import {Component, OnInit,NgModule, ElementRef} from '@angular/core';
import { CommonService } from '../Services/CommonService';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
   public name:string;
   public lastName:string;
   public email:string;
   public password:string;
   public role:string;
	    constructor(
        private http: Http,
        private common_service : CommonService
        ) 
        {
        	console.log("11")
        	this.createUser();
        }

    createUser() {
   	var body = {
      	name:this.name,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        role:this.role
      }
console.log("11111111",body)
    return this.http.post(`http://192.168.0.168:4009/exchanges/api/v1/user/createUser`,body)
    .subscribe((Response) => {console.log(Response.json())});
  }

  ngOnInit() {
  }

}
