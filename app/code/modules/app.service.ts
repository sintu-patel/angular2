import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  constructor (private http: Http) {}

  getData() : Observable<Comment[]> {
    return this.http.get('http://localhost:3100/cms')
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveData(dataJSON) : Observable<Comment[]> {
   var url = 'http://localhost:3100/savecms';
   url += '?issue=';
   url += dataJSON.issue;
   url += '&resolution=';
   url += dataJSON.resolution;
    return this.http.get(url);
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}