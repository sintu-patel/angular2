System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var labelConfig;
    return {
        setters:[],
        execute: function() {
            exports_1("labelConfig", labelConfig = {
                common: {
                    title: 'Digital LLP',
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
                        label: 'Update Fine List',
                        url: '/correctfile'
                    },
                    {
                        label: 'LLP',
                        url: '/llp'
                    },
                    {
                        label: 'Issues, Next Steps',
                        url: '/issuerisknextsteps'
                    },
                    {
                        label: 'Manage LLP',
                        url: '/login'
                    }
                ]
            });
        }
    }
});
//# sourceMappingURL=app.labels.js.map