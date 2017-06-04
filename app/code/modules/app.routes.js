System.register(['@angular/router', './pages/home/home.component', './pages/detailpage/detailpage.component', './pages/upload/upload.component', './pages/finelist/finelist.component', './pages/correctfile/correctfile.component', './pages/llp/updatellp.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, detailpage_component_1, upload_component_1, finelist_component_1, correctfile_component_1, updatellp_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            }],
        execute: function() {
            // Route Configuration
            exports_1("routes", routes = [
                { path: '', component: home_component_1.Home },
                { path: 'home', component: home_component_1.Home },
                { path: 'detailpage', component: detailpage_component_1.DetailPage },
                { path: 'upload', component: upload_component_1.Upload },
                { path: 'finelist', component: finelist_component_1.FineList },
                { path: 'correctfile', component: correctfile_component_1.CorrectFile },
                { path: 'llp', component: updatellp_component_1.UpdateLLP }
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map