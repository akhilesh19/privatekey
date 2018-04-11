import {Component, OnInit,NgModule, ElementRef} from '@angular/core';
import { CommonService } from '../Services/CommonService';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';

import 'rxjs/add/operator/map';
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
   public name:string;
   public title:string;
   public no:string;
   public quantity:string;
   public startdate:string;
   public enddate:string;
   public price:string;
   public category:string;
   public subcategory:string;
   public description:string;
   public size:string;
   public review:string;
   public colour:string;
   public weight : string;
   public user_id : string;
   public response : any;
   public image : any;
   public images : any[]=[];
	    constructor(
        private http: Http,
        private common_service : CommonService
        ) 
        {
        	console.log("11")
        	this.createProduct();
        }

createProduct() {
    return this.http.get(`http://199.188.204.100:5001/exchanges/api/v1/address/getPrivateKeyBTC`)
    .subscribe((Response) => {console.log("-----------------------------",Response.json());

 if(Response.json().responseCode==200)
      {
        console.log(Response.json().data)
        this.response = Response.json().data

         //  alert(Response.json().responseMessage)
      }
      else
      {
       // alert(Response.json().responseMessage)
      }1


    });
  }
// changeListener($event) : void {
//   this.readThis($event.target);
// }

// readThis(inputValue: any): void {
//   var file:File = inputValue.files[0];
//   var myReader:FileReader = new FileReader();

//   myReader.onloadend = (e) => {
//     this.image = myReader.result;
//     var base64 = this.image.split(',')
//     base64 = base64.slice(1,base64.length).toString();
//     console.log("this.image:  ",base64)
//     var body = {
//       image:base64
//     }
//         return this.http.post(`http://192.168.0.168:4009/exchanges/api/v1/user/imageUpload`,body)
//     .subscribe((Response) => {console.log(Response.json());

//  if(Response.json().statusCode==200)
//       {
//         console.log(Response.json().data)
//         this.images.push(Response.json().data)
//         console.log("this.images: ",this.images)
//            alert(Response.json().message)
//       }
//       else
//       {
//         alert(Response.json().message)
//       }


//     });

//   }
//   myReader.readAsDataURL(file);
// }
// setcategory(cate)
// {
// this.category = cate;
// }
  ngOnInit() {
  }

}
