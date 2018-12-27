// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params
import { labelConfig } from '../../../config/app.labels';
import { apiConfig } from '../../../config/app.config';

@Component({
  templateUrl: './partial.app.html',
  providers: [DataService]
})

// Component class
export class Login {
    token: String;
    modelData: any;
    isModelOpen: boolean;
    loggedIn: boolean;
    constructor(private dataService: DataService) {
	   this.token = null;
     this.modelData = null;
     this.isModelOpen = false;
     this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
    }
    closeModel() {
      this.modelData = null;
      this.isModelOpen = false;
    }
    login() {
      if (!this.token) {
        this.invalidData('Empty input');
        return;
      } else if (this.token !== apiConfig.validToken) {
         this.invalidData('Invalid Token');
         return;
      }
      const token = this.token;
      this.setSession(token);
    }
    invalidData(headingText:any) {
      let modelData = {
        showCloseButton: true,
        heading: headingText,
        description: 'You can not login without valid token'
      };
      this.openModel(modelData);
    }
    openModel(data:any) {
      this.modelData = data;
      this.isModelOpen = true;
    }
    makeloggedIn() {
      let modelData = {
        showRedirectLink: true,
        redirectUrl: labelConfig.navigation[0].url,
        redirectLabel: labelConfig.navigation[0].label,
        heading: 'You are logged in as ' + sessionStorage['token'],
        description: 'Click home to continue'
      };
      this.openModel(modelData);
    }
    setSession(token:any) {
      if (typeof(Storage) !== "undefined") {
        sessionStorage['token'] = token;
        this.makeloggedIn();
      }
    }
    loggedOut() {
      let modelData = {
        showRedirectLink: true,
        redirectUrl: labelConfig.navigation[0].url,
        redirectLabel: labelConfig.navigation[0].label,
        heading: 'You are logged out.',
        description: 'Click home to continue'
      };
      this.openModel(modelData);
    }
    logout() {
      if (typeof(Storage) !== "undefined" && sessionStorage['token']) {
        sessionStorage['token'] = null;
        this.loggedOut();
      }
    }
}