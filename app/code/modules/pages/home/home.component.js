System.register(['@angular/core', './server/data-main'], function(exports_1, context_1) {
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
    var core_1, data_main_1;
    var Home;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_main_1_1) {
                data_main_1 = data_main_1_1;
            }],
        execute: function() {
            Home = class Home {
                constructor() {
                    this.heading = data_main_1.DATA.heading;
                    this.DATA = data_main_1.DATA.data;
                    this.linksHeading = data_main_1.DATA.linksHeading;
                    this.categoriesHeading = data_main_1.DATA.categoriesHeading;
                    this.CATEGORIES = data_main_1.DATA.categories;
                }
                onClick(e) {
                    alert('faltu');
                }
            };
            Home = __decorate([
                core_1.Component({
                    templateUrl: './app/code/modules/components/partial.app.html'
                }), 
                __metadata('design:paramtypes', [])
            ], Home);
            exports_1("Home", Home);
        }
    }
});
//# sourceMappingURL=home.component.js.map