// Import component decorator
import { Component } from '@angular/core';
import { DataService } from '../../app.service';
import { ActivatedRoute } from '@angular/router'; // to get route params

@Component({
  templateUrl: './app/code/modules/pages/upload/partial.app.html',
  providers: [DataService]
})

// Component class
export class Upload {
    upload: String;
    issue: String;
    resolution: String;
    saveStatus: String;
    fileData: any;
    filesToUpload: Array<File>;
    constructor(private dataService: DataService) {
	   this.upload = "Upload";
     this.issue = null;
     this.resolution = null;
    }
    onClick() {
      if (!this.issue || !this.resolution) {
        alert('Please enter the data');
        return;
      }
      const dataJSON = {
        "issue": this.issue,
        "resolution": this.resolution
      };
      this.sendData(dataJSON);
    }
    sendData(dataJSON) {
        this.dataService.saveData(dataJSON).subscribe(data => {
            this.saveStatus = 'saved';
            this.saveCompleted(this.saveStatus);
        });
    }
    saveCompleted(status) {
      alert('completed');
    }
    uploadFile(event) {
      this.filesToUpload = <Array<File>> event.target.files;
    }
    processData() {
      const url = "http://localhost:3100/uploadcms";
      this.dataService.makeFileUploadRequest(url, [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
}