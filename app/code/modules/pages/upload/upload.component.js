System.register(['@angular/core', '../../app.service', '../../../config/app.labels'], function(exports_1, context_1) {
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
    var core_1, app_service_1, app_labels_1;
    var Upload;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (app_labels_1_1) {
                app_labels_1 = app_labels_1_1;
            }],
        execute: function() {
            Upload = class Upload {
                constructor(dataService) {
                    this.dataService = dataService;
                    this.upload = "Upload";
                    this.issue = null;
                    this.resolution = null;
                    // error model
                    this.modelData = null;
                    this.isModelOpen = false;
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
                sendData(dataJSON) {
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
                        redirectUrl: app_labels_1.labelConfig.navigation[0].url,
                        redirectLabel: app_labels_1.labelConfig.navigation[0].label,
                        heading: 'Success',
                        description: 'Your data has been saved'
                    };
                    this.openModel(modelData);
                }
                openModel(data) {
                    this.modelData = data;
                    this.isModelOpen = true;
                }
                closeModel() {
                    this.modelData = null;
                    this.isModelOpen = false;
                }
                uploadFile(event) {
                    const files = event.target.files;
                    const allowedFileTypes = ['application/vnd.ms-excel'];
                    const fileType = files[0].type;
                    if (allowedFileTypes.indexOf(fileType) !== -1) {
                        this.filesToUpload = files;
                    }
                    else {
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
                                redirectUrl: app_labels_1.labelConfig.navigation[3].url,
                                redirectLabel: app_labels_1.labelConfig.navigation[3].label,
                                heading: 'File uploaded',
                                description: 'File uploaded successfully. Please click on correct errors'
                            };
                            this.openModel(modelData);
                        }, (error) => {
                            console.error(error);
                        });
                    }
                    else {
                        let modelData = {
                            showCloseButton: true,
                            heading: 'Invalid file',
                            description: 'Only xls file upload is allowed'
                        };
                        this.openModel(modelData);
                    }
                }
            };
            Upload = __decorate([
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