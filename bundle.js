var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("config/app.labels", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var labelConfig;
    return {
        setters:[],
        execute: function() {
            exports_1("labelConfig", labelConfig = {
                common: {
                    title: 'Digital LLP',
                    searchResultHeading: 'Search Results',
                    navHeading: 'All issues',
                    searchPlaceHolder: 'Search the issues',
                    uploadFileformat: 'xls'
                },
                navigation: [
                    {
                        label: 'Home',
                        url: '/home'
                    },
                    {
                        label: 'Upload',
                        url: '/upload'
                    },
                    {
                        label: 'Fine List',
                        url: '/finelist'
                    },
                    {
                        label: 'Update Fine List',
                        url: '/correctfile'
                    },
                    {
                        label: 'LLP',
                        url: '/llp'
                    }
                ]
            });
        }
    }
});
System.register("modules/components/component.app", ['@angular/core', "config/app.labels"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, app_labels_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_labels_1_1) {
                app_labels_1 = app_labels_1_1;
            }],
        execute: function() {
            AppComponent = class AppComponent {
                constructor() {
                    this.navData = app_labels_1.labelConfig.navigation;
                    this.commonLabels = app_labels_1.labelConfig.common;
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    templateUrl: './app/code/modules/components/partial.app.html',
                }), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_2("AppComponent", AppComponent);
        }
    }
});
System.register("modules/components/pipe.app", ['@angular/core'], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2;
    var TrimString;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            TrimString = class TrimString {
                transform(pipeData) {
                    if (!pipeData) {
                        return 'No data';
                    }
                    return pipeData.substring(0, 50) + '...';
                }
            };
            TrimString = __decorate([
                core_2.Pipe({
                    name: 'trimstring'
                }), 
                __metadata('design:paramtypes', [])
            ], TrimString);
            exports_3("TrimString", TrimString);
        }
    }
});
System.register("modules/components/search.app", ['@angular/core'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3;
    var SearchData;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            SearchData = class SearchData {
                transform(pipeData, query) {
                    if (!query) {
                        return null;
                    }
                    return pipeData.filter((eachItem => {
                        if (eachItem['issue']) {
                            return eachItem['issue'].toLowerCase().includes(query.toLowerCase());
                        }
                    }));
                }
            };
            SearchData = __decorate([
                core_3.Pipe({
                    name: 'find'
                }), 
                __metadata('design:paramtypes', [])
            ], SearchData);
            exports_4("SearchData", SearchData);
        }
    }
});
System.register("config/app.config", [], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var host, apiConfig;
    return {
        setters:[],
        execute: function() {
            // Host Configuration
            host = 'http://localhost:3100/';
            exports_5("apiConfig", apiConfig = {
                apiServer: {
                    cmsUrl: host + 'cms',
                    cmsfinelistUrl: host + 'cmsfinelist',
                    cmscorrectfinelistUrl: host + 'cmscorrectfinelist',
                    savecmsUrl: host + 'savecms',
                    savefiledataUrl: host + 'savefiledata',
                    savellpdataUrl: host + 'savellp',
                    getllpdataUrl: host + 'getllpdata',
                    uploadcmsUrl: host + 'uploadcms'
                },
                contentTypeJson: {
                    'Content-Type': 'application/json'
                },
                errors: {
                    dataSaved: 'data-saved-to-db',
                    dataNotSaved: 'data-not-saved-to-db',
                    fileUpload: 'file-uploaded',
                    fileNotUploaded: 'file-not-uploaded',
                    dbConnectError: 'unable-to-connect-to-db',
                    dataFetchedFromdb: 'data-fetched-from-db',
                    dataFetchFromdbError: 'unable-to-get-data-from-db',
                    serverStarted: 'server-started'
                },
                isloggedIn: false
            });
        }
    }
});
System.register("modules/app.service", ['@angular/core', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', "config/app.config"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, http_1, Rx_1, app_config_1;
    var DataService;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            DataService = class DataService {
                constructor(http) {
                    this.http = http;
                }
                getData() {
                    return this.http.get(app_config_1.apiConfig.apiServer.cmsUrl)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
                getFineData() {
                    return this.http.get(app_config_1.apiConfig.apiServer.cmsfinelistUrl)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
                getFineDataFromFile() {
                    return this.http.get(app_config_1.apiConfig.apiServer.cmscorrectfinelistUrl)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
                saveData(dataJSON) {
                    var url = app_config_1.apiConfig.apiServer.savecmsUrl;
                    let headers = new http_1.Headers(app_config_1.apiConfig.contentTypeJson);
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, dataJSON, options)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
                saveFileData(dataJSON) {
                    var url = app_config_1.apiConfig.apiServer.savefiledataUrl;
                    let headers = new http_1.Headers(app_config_1.apiConfig.contentTypeJson);
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, dataJSON, options)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
                makeFileUploadRequest(params, files) {
                    const url = app_config_1.apiConfig.apiServer.uploadcmsUrl;
                    return new Promise((resolve, reject) => {
                        var formData = new FormData();
                        var xhr = new XMLHttpRequest();
                        for (var i = 0; i < files.length; i++) {
                            formData.append("uploads", files[i], files[i].name);
                        }
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.send(formData);
                    });
                }
                saveLLPData(dataJSON) {
                    var url = app_config_1.apiConfig.apiServer.savellpdataUrl;
                    let headers = new http_1.Headers(app_config_1.apiConfig.contentTypeJson);
                    let options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, dataJSON, options)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
                getLLPData() {
                    return this.http.get(app_config_1.apiConfig.apiServer.getllpdataUrl)
                        .map((res) => res.json()).catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
                }
            };
            DataService = __decorate([
                core_4.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], DataService);
            exports_6("DataService", DataService);
        }
    }
});
System.register("modules/pages/home/home.component", ['@angular/core', "modules/app.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, app_service_1;
    var Home;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            Home = class Home {
                constructor(dataService) {
                    this.dataService = dataService;
                    this.DATA = [];
                    this.loadUser();
                }
                onClick(e) {
                    this.loadUser();
                }
                setData(data) {
                    this.DATA = data.data;
                }
                loadUser() {
                    this.dataService.getData().subscribe(data => {
                        this.setData(data);
                    });
                }
            };
            Home = __decorate([
                core_5.Component({
                    templateUrl: './app/code/modules/pages/home/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [app_service_1.DataService])
            ], Home);
            exports_7("Home", Home);
        }
    }
});
System.register("modules/pages/detailpage/detailpage.component", ['@angular/core', "modules/app.service", '@angular/router'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, app_service_2, router_1;
    var DetailPage;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (app_service_2_1) {
                app_service_2 = app_service_2_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DetailPage = class DetailPage {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    if (this.id >= 0) {
                        this.loadUser();
                    }
                }
                setData(data) {
                    this.list = data.data[this.id];
                    this.heading = data.heading;
                    this.question = this.list.issue;
                    this.answer = this.list.resolution;
                }
                ngOnInit() {
                    this.id = this.route.snapshot.queryParams["p"];
                    this.loadUser();
                }
                loadUser() {
                    this.dataService.getData().subscribe(data => {
                        this.setData(data);
                    });
                }
            };
            DetailPage = __decorate([
                // to get route params
                core_6.Component({
                    templateUrl: './app/code/modules/pages/detailpage/partial.app.html',
                    providers: [app_service_2.DataService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, app_service_2.DataService])
            ], DetailPage);
            exports_8("DetailPage", DetailPage);
        }
    }
});
System.register("modules/pages/upload/upload.component", ['@angular/core', "modules/app.service", "config/app.labels", "config/app.config"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_7, app_service_3, app_labels_2, app_config_2;
    var Upload;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (app_service_3_1) {
                app_service_3 = app_service_3_1;
            },
            function (app_labels_2_1) {
                app_labels_2 = app_labels_2_1;
            },
            function (app_config_2_1) {
                app_config_2 = app_config_2_1;
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
                    this.loggedIn;
                    app_config_2.apiConfig.isloggedIn;
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
                        redirectUrl: app_labels_2.labelConfig.navigation[0].url,
                        redirectLabel: app_labels_2.labelConfig.navigation[0].label,
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
                                redirectUrl: app_labels_2.labelConfig.navigation[3].url,
                                redirectLabel: app_labels_2.labelConfig.navigation[3].label,
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
                core_7.Component({
                    templateUrl: './app/code/modules/pages/upload/partial.app.html',
                    providers: [app_service_3.DataService]
                }), 
                __metadata('design:paramtypes', [app_service_3.DataService])
            ], Upload);
            exports_9("Upload", Upload);
        }
    }
});
System.register("modules/pages/finelist/finelist.component", ['@angular/core', "modules/app.service", '@angular/router'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_8, app_service_4, router_2;
    var FineList;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (app_service_4_1) {
                app_service_4 = app_service_4_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            FineList = class FineList {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.fileData = [];
                    this.loadFineList();
                }
                setData(data) {
                    this.fileData = data.fileData;
                }
                loadFineList() {
                    this.dataService.getFineData().subscribe(data => {
                        this.setData(data);
                    });
                }
            };
            FineList = __decorate([
                // to get route params
                core_8.Component({
                    templateUrl: './app/code/modules/pages/finelist/partial.app.html',
                    providers: [app_service_4.DataService]
                }), 
                __metadata('design:paramtypes', [router_2.ActivatedRoute, app_service_4.DataService])
            ], FineList);
            exports_10("FineList", FineList);
        }
    }
});
System.register("modules/pages/correctfile/correctfile.component", ['@angular/core', "modules/app.service", '@angular/router', "config/app.config"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_9, app_service_5, router_3, app_config_3;
    var CorrectFile;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (app_service_5_1) {
                app_service_5 = app_service_5_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (app_config_3_1) {
                app_config_3 = app_config_3_1;
            }],
        execute: function() {
            CorrectFile = class CorrectFile {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.fileData = [];
                    this.initialData = {
                        empid: 'TBD',
                        name: 'TBD',
                        fine: 'TBD',
                        currency: 'TBD',
                        collectedfine: 'TBD'
                    };
                    // error model
                    this.modelData = null;
                    this.isModelOpen = false;
                    this.loggedIn;
                    app_config_3.apiConfig.isloggedIn;
                    this.loadFineList();
                }
                setData(data) {
                    if (data.fileData && data.fileData.length) {
                        this.fileData = data.fileData;
                    }
                    if (!data.fileData || !data.fileData.length) {
                        this.fileData.push(this.initialData);
                    }
                }
                loadFineList() {
                    this.dataService.getFineData().subscribe(data => {
                        this.setData(data);
                    });
                }
                updateData(event) {
                    let $input = event.target;
                    let $inputValue = $input.value;
                    let $colName = $input.name;
                    let $rowNo = $input.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    switch ($colName) {
                        case "name":
                            this.fileData[$rowNo].name = $inputValue;
                            break;
                        case "fine":
                            this.fileData[$rowNo].fine = $inputValue;
                            break;
                        case "currency":
                            this.fileData[$rowNo].currency = $inputValue;
                            break;
                        case "collectedfine":
                            this.fileData[$rowNo].collectedfine = $inputValue;
                            break;
                        default:
                            break;
                    }
                    this.saveDataForOneRow(this.fileData[$rowNo]);
                }
                saveDataForOneRow(fileData) {
                    var fileArray = [];
                    fileArray.push(fileData);
                    this.dataService.saveFileData(fileArray).subscribe(data => {
                        this.fileSaved();
                        this.loadFineList();
                    });
                }
                deleteRow(event) {
                    let $button = event.target;
                    let $rowNo = $button.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    this.fileData[$rowNo].isDeleted = 'deleted';
                }
                saveData() {
                    const fileData = this.fileData;
                    this.dataService.saveFileData(fileData).subscribe(data => {
                        this.fileSaved();
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
                fileSaved() {
                    let modelData = {
                        showCloseButton: true,
                        heading: 'File saved',
                        description: 'Data saved successfully.'
                    };
                    this.openModel(modelData);
                    this.loadFineList();
                }
                addRow() {
                    var fileLength = this.fileData.length;
                    if (this.fileData[fileLength - 1].name !== 'TBD') {
                        this.fileData.push(this.initialData);
                    }
                    else {
                        let modelData = {
                            showCloseButton: true,
                            heading: 'Error1',
                            description: 'Please save data to the last row first'
                        };
                        this.openModel(modelData);
                    }
                }
                openModel(data) {
                    this.modelData = data;
                    this.isModelOpen = true;
                }
                closeModel() {
                    this.modelData = null;
                    this.isModelOpen = false;
                }
            };
            CorrectFile = __decorate([
                core_9.Component({
                    templateUrl: './app/code/modules/pages/correctfile/partial.app.html',
                    providers: [app_service_5.DataService]
                }), 
                __metadata('design:paramtypes', [router_3.ActivatedRoute, app_service_5.DataService])
            ], CorrectFile);
            exports_11("CorrectFile", CorrectFile);
        }
    }
});
System.register("modules/pages/llp/updatellp.component", ['@angular/core', "modules/app.service", '@angular/router', "config/app.config"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_10, app_service_6, router_4, app_config_4;
    var UpdateLLP;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (app_service_6_1) {
                app_service_6 = app_service_6_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (app_config_4_1) {
                app_config_4 = app_config_4_1;
            }],
        execute: function() {
            UpdateLLP = class UpdateLLP {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.fileData = [];
                    this.initialData = {
                        empid: 'TBD',
                        name: 'TBD',
                        monday: 'TBD',
                        tuesday: 'TBD',
                        wednesday: 'TBD',
                        thursday: 'TBD',
                        friday: 'TBD'
                    };
                    // error model
                    this.modelData = null;
                    this.isModelOpen = false;
                    this.loggedIn;
                    app_config_4.apiConfig.isloggedIn;
                    this.loadLLP();
                }
                setData(data) {
                    if (data.fileData && data.fileData.length) {
                        this.fileData = data.fileData;
                    }
                    if (!data.fileData || !data.fileData.length) {
                        this.fileData.push(this.initialData);
                    }
                }
                loadLLP() {
                    this.dataService.getLLPData().subscribe(data => {
                        this.setData(data);
                    });
                }
                updateData(event) {
                    let $input = event.target;
                    let $inputValue = $input.value;
                    let $colName = $input.name;
                    let $rowNo = $input.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    switch ($colName) {
                        case "name":
                            this.fileData[$rowNo].name = $inputValue;
                            break;
                        case "monday":
                            this.fileData[$rowNo].monday = $inputValue;
                            break;
                        case "tuesday":
                            this.fileData[$rowNo].tuesday = $inputValue;
                            break;
                        case "wednesday":
                            this.fileData[$rowNo].wednesday = $inputValue;
                            break;
                        case "thursday":
                            this.fileData[$rowNo].thursday = $inputValue;
                            break;
                        case "friday":
                            this.fileData[$rowNo].friday = $inputValue;
                            break;
                        default:
                            break;
                    }
                    this.saveDataForOneRow(this.fileData[$rowNo]);
                }
                saveDataForOneRow(fileData) {
                    var fileArray = [];
                    fileArray.push(fileData);
                    this.dataService.saveLLPData(fileArray).subscribe(data => {
                        this.fileSaved();
                        this.loadLLP();
                    });
                }
                deleteRow(event) {
                    let $button = event.target;
                    let $rowNo = $button.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    this.fileData[$rowNo].isDeleted = 'deleted';
                }
                addRow() {
                    var fileLength = this.fileData.length;
                    if (this.fileData[fileLength - 1].name !== 'TBD') {
                        this.fileData.push(this.initialData);
                    }
                    else {
                        let modelData = {
                            showCloseButton: true,
                            heading: 'Error1',
                            description: 'Please save data to the last row first'
                        };
                        this.openModel(modelData);
                    }
                }
                saveData() {
                    const fileData = this.fileData;
                    this.dataService.saveLLPData(fileData).subscribe(data => {
                        this.fileSaved();
                        this.loadLLP();
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
                fileSaved() {
                    let modelData = {
                        showCloseButton: true,
                        heading: 'File saved',
                        description: 'Data saved successfully.'
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
            };
            UpdateLLP = __decorate([
                core_10.Component({
                    templateUrl: './app/code/modules/pages/llp/partial.app.html',
                    providers: [app_service_6.DataService]
                }), 
                __metadata('design:paramtypes', [router_4.ActivatedRoute, app_service_6.DataService])
            ], UpdateLLP);
            exports_12("UpdateLLP", UpdateLLP);
        }
    }
});
System.register("modules/app.routes", ['@angular/router', "modules/pages/home/home.component", "modules/pages/detailpage/detailpage.component", "modules/pages/upload/upload.component", "modules/pages/finelist/finelist.component", "modules/pages/correctfile/correctfile.component", "modules/pages/llp/updatellp.component"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var router_5, home_component_1, detailpage_component_1, upload_component_1, finelist_component_1, correctfile_component_1, updatellp_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_5_1) {
                router_5 = router_5_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (detailpage_component_1_1) {
                detailpage_component_1 = detailpage_component_1_1;
            },
            function (upload_component_1_1) {
                upload_component_1 = upload_component_1_1;
            },
            function (finelist_component_1_1) {
                finelist_component_1 = finelist_component_1_1;
            },
            function (correctfile_component_1_1) {
                correctfile_component_1 = correctfile_component_1_1;
            },
            function (updatellp_component_1_1) {
                updatellp_component_1 = updatellp_component_1_1;
            }],
        execute: function() {
            // Route Configuration
            exports_13("routes", routes = [
                { path: '', component: home_component_1.Home },
                { path: 'home', component: home_component_1.Home },
                { path: 'detailpage', component: detailpage_component_1.DetailPage },
                { path: 'upload', component: upload_component_1.Upload },
                { path: 'finelist', component: finelist_component_1.FineList },
                { path: 'correctfile', component: correctfile_component_1.CorrectFile },
                { path: 'llp', component: updatellp_component_1.UpdateLLP }
            ]);
            exports_13("routing", routing = router_5.RouterModule.forRoot(routes));
        }
    }
});
System.register("modules/app.modules", ['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', "modules/components/component.app", "modules/components/pipe.app", "modules/components/search.app", "modules/pages/home/home.component", "modules/pages/detailpage/detailpage.component", "modules/pages/upload/upload.component", "modules/pages/finelist/finelist.component", "modules/pages/correctfile/correctfile.component", "modules/pages/llp/updatellp.component", "modules/app.routes"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_11, platform_browser_1, forms_1, http_2, component_app_1, pipe_app_1, search_app_1, home_component_2, detailpage_component_2, upload_component_2, finelist_component_2, correctfile_component_2, updatellp_component_2, app_routes_1;
    var AppModule;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            },
            function (pipe_app_1_1) {
                pipe_app_1 = pipe_app_1_1;
            },
            function (search_app_1_1) {
                search_app_1 = search_app_1_1;
            },
            function (home_component_2_1) {
                home_component_2 = home_component_2_1;
            },
            function (detailpage_component_2_1) {
                detailpage_component_2 = detailpage_component_2_1;
            },
            function (upload_component_2_1) {
                upload_component_2 = upload_component_2_1;
            },
            function (finelist_component_2_1) {
                finelist_component_2 = finelist_component_2_1;
            },
            function (correctfile_component_2_1) {
                correctfile_component_2 = correctfile_component_2_1;
            },
            function (updatellp_component_2_1) {
                updatellp_component_2 = updatellp_component_2_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_11.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_2.HttpModule,
                        app_routes_1.routing
                    ],
                    declarations: [
                        component_app_1.AppComponent,
                        pipe_app_1.TrimString,
                        search_app_1.SearchData,
                        home_component_2.Home,
                        detailpage_component_2.DetailPage,
                        upload_component_2.Upload,
                        finelist_component_2.FineList,
                        correctfile_component_2.CorrectFile,
                        updatellp_component_2.UpdateLLP
                    ],
                    bootstrap: [
                        component_app_1.AppComponent
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_14("AppModule", AppModule);
        }
    }
});
System.register("app.boot", ['@angular/platform-browser-dynamic', "modules/app.modules", '@angular/core'], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var platform_browser_dynamic_1, app_modules_1, core_12;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_modules_1_1) {
                app_modules_1 = app_modules_1_1;
            },
            function (core_12_1) {
                core_12 = core_12_1;
            }],
        execute: function() {
            core_12.enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_modules_1.AppModule);
        }
    }
});
//# sourceMappingURL=bundle.js.map