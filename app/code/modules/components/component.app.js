System.register(["@angular/core", "../../config/app.labels"], function (exports_1, context_1) {
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
    var core_1, app_labels_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_labels_1_1) {
                app_labels_1 = app_labels_1_1;
            }
        ],
        execute: function () {
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
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=component.app.js.map