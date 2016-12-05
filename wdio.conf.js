
exports.config = {

    /**
     * server configurations
     */
    //host: '127.0.0.1',
    host: '0.0.0.0',
    port: 4444,
    path: '/wd/hub',

    /**
     * specify test files
     */
   specs: [
      //'./test/specs/mocha-test.js',
      //'./test/specs/mocha-test-po.js'
      './test/specs/mocha-test-po.js',
      './test/specs/mocha-test-po-2.js'
      
    ],
  /*  exclude: [
        'test/spec/multibrowser/**',
        'test/spec/mobile/**'
    ], */

    /**
     * capabilities
     */
    capabilities: [ {
        maxInstances: 4,
        browserName: 'firefox',
     /*   specs: [
            './test/specs/mocha-test-po-copy.js'
        ]*/
    }, 
   {
        maxInstances: 4,
        browserName: 'chrome',
     /*    specs: [
            './test/specs/mocha-test-po-copy.js'
        ] */
    } 
    ],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    //screenshotPath: 'shots',
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 200000,
    framework: 'mocha',

    //reporters: ['dot'],
    //reporterOptions: {
    //  outputDir: './'
    
    reporters: ['allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results'
        }
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 500000
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }

};