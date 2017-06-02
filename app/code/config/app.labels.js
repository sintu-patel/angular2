System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var labelConfig;
    return {
        setters:[],
        execute: function() {
            exports_1("labelConfig", labelConfig = {
                common: {
                    title: 'Data Transformation',
                    searchResultHeading: 'Search Results',
                    navHeading: 'All issues',
                    searchPlaceHolder: 'Search the issues',
                    uploadFileformat: 'xls'
                },
                navigation: [
                    {
                        label: 'Home',
                        url: '/home'
                    },
                    {
                        label: 'Upload',
                        url: '/upload'
                    },
                    {
                        label: 'Fine List',
                        url: '/finelist'
                    },
                    {
                        label: 'Correct Fine List',
                        url: '/correctfile'
                    }
                ]
            });
        }
    }
});
//# sourceMappingURL=app.labels.js.map