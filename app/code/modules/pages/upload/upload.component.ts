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
      this.makeFileRequest(url, [], this.filesToUpload).then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
    }
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
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