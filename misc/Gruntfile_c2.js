var phantomjs = require('phantomjs');
var Horseman = require("node-horseman");

var horseman = new Horseman({phantomPath: phantomjs.path});

module.exports = function (grunt) {
  var browsers = [{
    browserName: 'firefox',
    version: '19',
    platform: 'XP'
  }, {
    browserName: 'googlechrome',
    platform: 'XP'
  }, {
    browserName: 'googlechrome',
    platform: 'linux'
  }, {
    browserName: 'internet explorer',
    platform: 'WIN8',
    version: '10'
  }, {
    browserName: 'internet explorer',
    platform: 'VISTA',
    version: '9'
  }];
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
 /*   
     mocha: {
      all: {
        src: ['./mocha-test.html'],
      },
      options: {
        run: true
      }
    },
   */
   
   mocha_browser:{
  all:{
    options:{
      output: ".tmp/test/coverage.html",
      reporter: 'html-cov',
      urls: ["localhost:9999/mocha-test.html"]
        }
      }
    },
    
    connect: {
      server: {
        options: {
          base: '',
         port: 9999
        }
      }
    },
    

  /*
    'saucelabs-mocha': {
      all: {
        options: {
          //username: 'saucelabs-user-name', // if not provided it'll default to ENV SAUCE_USERNAME (if applicable)
          //key: 'saucelabs-key', // if not provided it'll default to ENV SAUCE_ACCESS_KEY (if applicable)
          urls: ['http://localhost:9999/mocha-test.html'],
          //src: ['./mocha-test.html'],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'mocha tests',
          throttled: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },  */
    watch: {}
  });
  
  grunt.loadNpmTasks('grunt-contrib-connect');
 /* grunt.loadNpmTasks('grunt-saucelabs'); */
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-mocha-browser');
  
  
  grunt.registerTask('default', ['mocha_browser']);
  
};