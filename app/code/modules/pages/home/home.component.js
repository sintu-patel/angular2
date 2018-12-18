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
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                core_1.Component({
                    templateUrl: './app/code/modules/pages/home/partial.app.html',
                    providers: [app_service_1.DataService]
                }), 
                __metadata('design:paramtypes', [app_service_1.DataService])
            ], Home);
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.component.js.map