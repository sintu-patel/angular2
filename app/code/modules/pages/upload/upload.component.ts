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
export class Upload {
    upload: String;
    issue: String;
    resolution: String;
    fileData: any;
    filesToUpload: Array<File>;

    // error model
    modelData: any;
    isModelOpen: any;
    loggedIn: boolean;
    constructor(private dataService: DataService) {
	   this.upload = "Upload";
     this.issue = null;
     this.resolution = null;

     // error model
     this.modelData =  null;
     this.isModelOpen = false;
     this.loggedIn = true; // TBD
    }
    onClick() {
      if (!this.issue || !this.resolution) {
        this.invalidData();
        return;
      }
      const dataJSON = {
        "issue": this.issue,
        "resolution": this.resolution
      };
      this.sendData(dataJSON);
    }
    invalidData() {
      let modelData = {
        showCloseButton: true,
        heading: 'Please enter the data',
        description: 'Please enter the data'
      };
      this.openModel(modelData);
    }
    sendData(dataJSON:any) {
      this.dataService.saveData(dataJSON).subscribe(data => {
        this.saveCompleted();
      });
    }
    dataNotSaved() {
      let modelData = {
        showCloseButton: true,
        heading: 'Error',
        description: 'Data not saved'
      };
      this.openModel(modelData);
    }
    saveCompleted() {
      let modelData = {
        showRedirectLink: true,
        redirectUrl: labelConfig.navigation[0].url,
        redirectLabel: labelConfig.navigation[0].label,
        heading: 'Success',
        description: 'Your data has been saved'
      };
      this.openModel(modelData);
    }
    openModel(data:any) {
      this.modelData = data;
      this.isModelOpen = true;
    }
    closeModel() {
      this.modelData = null;
      this.isModelOpen = false;
    }
    uploadFile(event:any) {
      const files = event.target.files;
      const allowedFileTypes = 'xls';
      const fileType = files[0].type;
      const fileName = files[0].name;
      if (fileName.indexOf(allowedFileTypes) !== -1) {
        this.filesToUpload = <Array<File>> files;
      } else {
        let modelData = {
          showCloseButton: true,
          heading: 'Invalid file',
          description: 'Only xls file upload is allowed'
        };
        this.openModel(modelData);
      }
    }
    processData() {
      if (this.filesToUpload && this.filesToUpload.length) {
        this.dataService.makeFileUploadRequest([], this.filesToUpload).then((result) => {
            let modelData = {
              showRedirectLink: true,
              redirectUrl: labelConfig.navigation[3].url,
              redirectLabel: labelConfig.navigation[3].label,
              heading: 'File uploaded',
              description: 'File uploaded successfully. Please click on correct errors'
            };
            this.openModel(modelData);
          }, (error) => {
              console.error(error);
        });
      } else {
        let modelData = {
          showCloseButton: true,
          heading: 'Invalid file',
          description: 'Only xls file upload is allowed'
        };
        this.openModel(modelData);
      }
    }
}