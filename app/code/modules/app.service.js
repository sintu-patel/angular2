System.register(['@angular/core', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', '../config/app.config'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1, app_config_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], DataService);
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=app.service.js.map