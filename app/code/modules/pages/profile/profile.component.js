System.register(['@angular/core', './server/data-main', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, data_main_1, router_1;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_main_1_1) {
                data_main_1 = data_main_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Profile = class Profile {
                constructor(route) {
                    this.route = route;
                    if (this.id >= 0) {
                        this.setData();
                    }
                }
                setData() {
                    this.list = data_main_1.DATA.data[this.id];
                    this.heading = data_main_1.DATA.heading;
                    this.question = this.list.issue;
                    this.answer = this.list.resolution;
                }
                ngOnInit() {
                    this.id = this.route.snapshot.queryParams["p"];
                    this.setData();
                }
            };
            Profile = __decorate([
                // to get route params
                core_1.Component({
                    templateUrl: './app/code/modules/pages/profile/partial.app.html'
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute])
            ], Profile);
            exports_1("Profile", Profile);
        }
    }
});
//# sourceMappingURL=profile.component.js.map