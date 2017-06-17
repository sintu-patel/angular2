System.register(["@angular/core", "../../app.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, app_service_1, IssueRiskNextSteps;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            IssueRiskNextSteps = class IssueRiskNextSteps {
                constructor(dataService) {
                    this.dataService = dataService;
                    this.issuesData = [];
                    this.nextStepsData = [];
                    this.loadData();
                    this.loggedIn = sessionStorage['token'] && sessionStorage['token'] === '9910712381';
                }
                setData(data) {
                    this.issuesData = data.issuesData;
                    this.nextStepsData = data.nextStepsData;
                }
                loadData() {
                    this.dataService.getIssuesData().subscribe(data => {
                        this.setData(data);
                    });
                }
                dataSaved() {
                    alert('data-saved');
                }
                saveData() {
                    const testData = {
                        issueType: 'issues-risk',
                        name: 'Create update page',
                        dueDate: '01-07-2017',
                        owner: 'Sintu'
                    };
                    this.dataService.saveIssuesData(testData).subscribe(data => {
                        this.dataSaved();
                    });
                }
                updateData(event) {
                }
            };
            IssueRiskNextSteps = __decorate([
                core_1.Component({
                    templateUrl: './app/code/modules/pages/issuerisknextsteps/partial.app.html',
                    providers: [app_service_1.DataService]
                }),
                __metadata("design:paramtypes", [app_service_1.DataService])
            ], IssueRiskNextSteps);
            exports_1("IssueRiskNextSteps", IssueRiskNextSteps);
        }
    };
});
//# sourceMappingURL=issuerisknextsteps.component.js.map