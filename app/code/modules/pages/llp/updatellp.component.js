System.register(['@angular/core', '../../app.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, app_service_1, router_1;
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
            }],
        execute: function() {
            UpdateLLP = class UpdateLLP {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.fileData = [];
                    this.initialData = {
                        empid: 'initial',
                        name: 'initial',
                        monday: 'initial',
                        tuesday: 'initial',
                        wednesday: 'initial',
                        thursday: 'initial',
                        friday: 'initial'
                    };
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
                }
                deleteRow(event) {
                    let $button = event.target;
                    let $rowNo = $button.getAttribute('data-rowno');
                    $rowNo = parseInt($rowNo, 10);
                    this.fileData[$rowNo].isDeleted = 'deleted';
                }
                addRow() {
                    var fileLength = this.fileData.length;
                    this.fileData.push(this.initialData);
                }
                saveData(event) {
                    const fileData = this.fileData;
                    this.dataService.saveLLPData(fileData).subscribe(data => {
                        alert('file-saved');
                    });
                }
            };
            UpdateLLP = __decorate([
                // to get route params
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