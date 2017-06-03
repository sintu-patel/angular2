System.register(['@angular/core', '../../app.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_service_1;
    var Upload;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            Upload = class Upload {
                constructor(dataService) {
                    this.dataService = dataService;
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
                    this.filesToUpload = event.target.files;
                }
                processData() {
                    this.dataService.makeFileUploadRequest([], this.filesToUpload).then((result) => {
                        console.log(result);
                    }, (error) => {
                        console.error(error);
                    });
                }
            };
            Upload = __decorate([
                // to get route params
                core_1.Component({
                    templateUrl: './app/code/modules/pages/upload/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [app_service_1.DataService])
            ], Upload);
            exports_1("Upload", Upload);
        }
    }
});
//# sourceMappingURL=upload.component.js.map