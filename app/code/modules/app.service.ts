import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  constructor (private http: Http) {}

  getUser() : Observable<Comment[]> {
    return this.http.get('http://localhost:3100/cms')
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}