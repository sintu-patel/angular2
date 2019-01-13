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
    username: String;
    password: String;
    modelData: any;
    isModelOpen: boolean;
    loggedIn: boolean;
    constructor(private dataService: DataService) {
     this.username = null;
     this.password = null;
     this.modelData = null;
     this.isModelOpen = false;
     this.loggedIn = false;
     this.checkLogin();
    }
    checkLogin() {
      const accessToken = this.getCookieByName(apiConfig.accessToken);
      if (accessToken) {
        this.dataService.checkLogin(accessToken).subscribe((data:any) => {
          if (data && data.auth) {
            this.loggedIn = true;
          }
        });
      }
    }
    getCookieByName (name: string) {
      var rc = document.cookie;
      var list = {};
      rc && rc.split(';').forEach((cookie) => {
        const parts = cookie.split('=');
        // @ts-ignore
        list[parts.shift().trim()] = decodeURI(parts.join('='));
      });

      // @ts-ignore
      if (list && list[name]) {
        // @ts-ignore
        return list[name];
      }
      return null;

    }
    closeModel() {
      this.modelData = null;
      this.isModelOpen = false;
    }
    login() {
      if (!this.username) {
        this.invalidData('Empty input');
        return;
      }
      const loginObj = {
        email: this.username,
        password: this.password
      };
      this.loginAction(loginObj);
    }
    invalidData(headingText:any) {
      let modelData = {
        showCloseButton: true,
        heading: headingText,
        description: 'Not a valid username/password'
      };
      this.openModel(modelData);
    }
    openModel(data:any) {
      this.modelData = data;
      this.isModelOpen = true;
    }
    makeloggedIn(userData: any) {
      this.saveInCookies(apiConfig.accessToken , userData[apiConfig.accessToken]);
      this.loggedIn = true;
      let modelData = {
        showRedirectLink: true,
        redirectUrl: labelConfig.navigation[0].url,
        redirectLabel: labelConfig.navigation[0].label,
        heading: 'You are logged in as ' + userData.username,
        description: 'Click home to continue'
      };
      this.openModel(modelData);
    }

    saveInCookies(name: string, value: string) {
      var d = new Date();
      var expiryTime = 15 * 60000;
      var cookieValue = value;
      d.setTime(d.getTime() + expiryTime);
      var expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + cookieValue + ";" + expires + ";path=/";    
    }

    loginAction(loginObj:any) {
      this.dataService.login(loginObj).subscribe((data:any) => {
        if (data.auth) {
          // Login success
          this.makeloggedIn(data);
        } else {
          this.invalidData('Failed login');
        }
      });
    }
}