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
    constructor(private dataService: DataService) {
	   this.upload = "Upload";
     this.issue = null;
     this.resolution = null;
    }
    onClick() {
      const dataJSON = {
        "issue": this.issue,
        "resolution": this.resolution
      };
      this.sendData(dataJSON);
    }
    sendData(dataJSON) {
        this.dataService.saveData(dataJSON).subscribe(data => {
            this.saveStatus = data._body.status;
            this.saveCompleted(this.saveStatus);
        });
    }
    saveCompleted(status) {
      alert('completed');
    }
    uploadFile(event) {
      this.fileData = event;
    }
    processData() {
      console.log(this.fileData);
    }
}