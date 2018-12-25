// Karma configuration
// Generated on Mon Dec 24 2018 14:55:07 GMT-0200 (UTC-02)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // Angular
            'node_modules/angular/angular.js',
            'node_modules/angular-messages/angular-messages.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',

            // Application
            'js/app.js',
            'js/controllers/ADPChallengeCtrl.js',
            'js/controllers/ADPChallengeCtrl.spec.js',
            'js/config/configValue.js',

            // Services
            'js/services/publicRepositoriesService.js',
            'js/services/publicRepositoriesService.spec.js',
            'js/services/subscribersService.js',
            'js/services/subscribersService.spec.js',

            // Filters
            'js/filters/paginationFilter.js',
            'js/filters/paginationFilter.spec.js',
            'js/filters/headerFilter.js',
            'js/filters/headerFilter.spec.js',
            'js/filters/ellipsisFilter.js',
            'js/filters/ellipsisFilter.spec.js'
        ],


        // list of files / patterns to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'progress'],


        // web server port
        port: 9876,


        // web server hostname
        hostname: 'localhost',


        // webserver listen address
        listenAddress: 'localhost',


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
