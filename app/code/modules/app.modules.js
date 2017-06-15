System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./components/component.app", "./components/pipe.app", "./components/search.app", "./pages/home/home.component", "./pages/detailpage/detailpage.component", "./pages/upload/upload.component", "./pages/finelist/finelist.component", "./pages/correctfile/correctfile.component", "./pages/llp/updatellp.component", "./pages/token/token.component", "./app.routes"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, component_app_1, pipe_app_1, search_app_1, home_component_1, detailpage_component_1, upload_component_1, finelist_component_1, correctfile_component_1, updatellp_component_1, token_component_1, app_routes_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            },
            function (token_component_1_1) {
                token_component_1 = token_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }
        ],
        execute: function () {
            AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        http_1.HttpModule,
                        app_routes_1.routing
                    ],
                    declarations: [
                        component_app_1.AppComponent,
                        pipe_app_1.TrimString,
                        search_app_1.SearchData,
                        home_component_1.Home,
                        detailpage_component_1.DetailPage,
                        upload_component_1.Upload,
                        finelist_component_1.FineList,
                        correctfile_component_1.CorrectFile,
                        updatellp_component_1.UpdateLLP,
                        token_component_1.Token
                    ],
                    bootstrap: [
                        component_app_1.AppComponent
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.modules.js.map