System.register(['@angular/core', '../../app.service', '@angular/router', '../../../config/app.config'], function(exports_1, context_1) {
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
    var core_1, app_service_1, router_1, app_config_1;
    var UpdateLLP;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
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
                    this.loggedIn = app_config_1.apiConfig.isloggedIn;
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
                core_1.Component({
                    templateUrl: './app/code/modules/pages/llp/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, app_service_1.DataService])
            ], UpdateLLP);
            exports_1("UpdateLLP", UpdateLLP);
        }
    }
});
//# sourceMappingURL=updatellp.component.js.map