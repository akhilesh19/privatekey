import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';


import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {
    
    authorDataArray:any;

    constructor(public _activatedroute:ActivatedRoute, public router:Router, public fb:FormBuilder ) { }

    getAuthorName():any {
        
        
         
        
        }
}