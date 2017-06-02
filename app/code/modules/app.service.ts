import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { apiConfig } from '../config/app.config';

@Injectable()
export class DataService {
  constructor (private http: Http) {}

  getData() : Observable<Comment[]> {
    return this.http.get(apiConfig.apiServer.cmsUrl)
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFineData() : Observable<Comment[]> {
    return this.http.get(apiConfig.apiServer.cmsfinelistUrl)
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getFineDataFromFile() : Observable<Comment[]> {
    return this.http.get(apiConfig.apiServer.cmscorrectfinelistUrl)
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveData(dataJSON) : Observable<Comment[]> {
   var url = apiConfig.apiServer.savecmsUrl;
   let headers = new Headers(apiConfig.contentTypeJson);
   let options = new RequestOptions({ headers: headers });
    return this.http.post(url, dataJSON, options)
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveFileData(dataJSON) : Observable<Comment[]> {
   var url = apiConfig.apiServer.savefiledataUrl;
   let headers = new Headers(apiConfig.contentTypeJson);
   let options = new RequestOptions({ headers: headers });
    return this.http.post(url, dataJSON, options)
    .map((res:Response) => res.json()).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  makeFileUploadRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append("uploads", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
  }
}