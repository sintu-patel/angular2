System.register(['@angular/router', './pages/home/home.component', './pages/profile/profile.component', './pages/upload/upload.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, profile_component_1, upload_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (upload_component_1_1) {
                upload_component_1 = upload_component_1_1;
            }],
        execute: function() {
            // Route Configuration
            exports_1("routes", routes = [
                { path: '', component: home_component_1.Home },
                { path: 'home', component: home_component_1.Home },
                { path: 'profile', component: profile_component_1.Profile },
                { path: 'upload', component: upload_component_1.Upload }
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map