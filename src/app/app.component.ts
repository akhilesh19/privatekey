import {Component, OnInit,NgModule, ElementRef} from '@angular/core';
import { CommonService } from './Services/CommonService';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery'
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
   public email:string;
   public password:string;
   public confirmPassword:string;
   public role:string;
   public name:string;
   public lastName:string;
   public access:boolean=false;
   public products:any;

	    constructor(
        private http: Http,
        private common_service : CommonService
        ) 
        {
        	console.log("11")
        	var data = localStorage.getItem('siteData');
        	if(data)
        	this.access = true;	
        	this.getProduct();
        }
    login() {
   	var body = {
        email:this.email,
        password:this.password,
        ip:'127.0.0.1',
        location:'gurgaon'
      }
console.log("11111111",body)
    return this.http.post(`http://192.168.0.168:4009/exchanges/api/v1/user/login`,body)
    .subscribe((Response) => {
    	console.log(Response.json());
    	if(Response.json().responseCode==200)
    	{
    		alert(Response.json().responseMessage)
    		localStorage.setItem('siteData',JSON.stringify(Response.json().data));
    		this.access = true;
    		$('#modal-1').hide();
    		// location.reload();
    	}
    	else
    	{
    		alert(Response.json().responseMessage)
    	}
    });
  }
      createUser() {
   	var body = {
        email:this.email,
        password:this.password,
        name:this.name,
        lastName:'gurgaon',
        role:'supplier'
      }
      if(body.password != this.confirmPassword)
      	alert('Password mismatch');
      else
    return this.http.post(`http://192.168.0.168:4009/exchanges/api/v1/user/createUser`,body)
    .subscribe((Response) => {
    	console.log(Response.json());
    	if(Response.json().responseCode==200)
    	{
    		alert(Response.json().responseMessage)
    		$('#modal-1').hide();
    	}
    	else
    	{
    		alert(Response.json().responseMessage)
    	}
    });
  }
logout()
{
	console.log("hiiiiiiiiiiiii")
	localStorage.removeItem('siteData');
	this.access = false;
	location.reload();
}

getProduct()
{
	    return this.http.get(`http://192.168.0.168:4009/exchanges/api/v1/product/getAllProducts`)
    .subscribe((Response) => {
    	console.log(Response.json());
    	if(Response.json().responseCode==200)
    	{
    		alert(Response.json().responseMessage)
    		this.products = Response.json().data
    	}
    	else
    	{
    		alert(Response.json().responseMessage)
    	}
    });
}
  ngOnInit() {
  }

}
