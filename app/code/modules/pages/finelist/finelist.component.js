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
    var FineList;
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
            FineList = class FineList {
                constructor(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.fileData = [];
                    this.files = [];
                    this.latestFile = [];
                    this.loadFineList();
                }
                setData(data) {
                    this.files = data.files;
                    this.totalFiles = this.files && this.files.length;
                    this.latestFileNumber = this.totalFiles - 1;
                    this.displayFileNumber = this.latestFileNumber;
                    this.latestFile = this.files[this.latestFileNumber];
                    this.fileData = this.latestFile.fileData;
                    this.llpCloseDate = this.latestFile.llpCloseDate;
                }
                displayPage() {
                    this.fileData = this.files[this.displayFileNumber].fileData;
                    this.llpCloseDate = this.files[this.displayFileNumber].llpCloseDate;
                }
                loadFineList() {
                    this.dataService.getFineData().subscribe(data => {
                        this.setData(data);
                    });
                }
                prevFine() {
                    if (this.displayFileNumber > 0) {
                        this.displayFileNumber = this.displayFileNumber - 1;
                        this.displayPage();
                    }
                }
                nextFine() {
                    if (this.displayFileNumber < this.latestFileNumber) {
                        this.displayFileNumber = this.displayFileNumber + 1;
                        this.displayPage();
                    }
                }
                processHistoryData(empid) {
                    let individualUserHistory = [];
                    let files = this.files;
                    let fileData;
                    let totalDue = 0;
                    let dueArray = [];
                    for (let i = 0; i < files.length; i++) {
                        fileData = files[i].fileData;
                        for (let j = 0; j < fileData.length; j++) {
                            if (fileData[j] && fileData[j].empid && fileData[j].empid === empid) {
                                let fine = fileData[j].fine;
                                if (fine) {
                                    fine = parseInt(fine, 10);
                                    let collectedfine = fileData[j].collectedfine;
                                    if (!collectedfine) {
                                        collectedfine = 0;
                                    }
                                    collectedfine = parseInt(collectedfine, 10);
                                    let due = fine - collectedfine;
                                    dueArray.push(due);
                                }
                            }
                        }
                    }
                    if (dueArray.length > 0) {
                        for (let i = 0; i < dueArray.length; i++) {
                            totalDue += dueArray[i];
                        }
                    }
                    return totalDue;
                }
                currentFine() {
                    this.displayFileNumber = this.latestFileNumber;
                    this.displayPage();
                }
            };
            FineList = __decorate([
                // to get route params
                core_1.Component({
                    templateUrl: './app/code/modules/pages/finelist/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, app_service_1.DataService])
            ], FineList);
            exports_1("FineList", FineList);
        }
    }
});
//# sourceMappingURL=finelist.component.js.map