var webdriverio = require('webdriverio');
var should = require('chai').should();
var expect = require('chai').expect();
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

/* var options = {
myChromeBrowser: {
        desiredCapabilities: {
            browserName: 'chrome'
        }
    },
    myFirefoxBrowser: {
        desiredCapabilities: {
            browserName: 'firefox'
        }
    }
};*/


describe('sauce labs page test', function() {



   before(function() {
   
   browser=webdriverio.remote(options)
   // browser=webdriverio.multiremote(options)
    return browser.init()
    
  });


   after(function() {
 
    return browser.end();
    
  });
 
   it('should assert page title', function() {
     
     browser.url('https://docs.saucelabs.com/reference/platforms-configurator/?_ga=1.5883444.608313.1428365147#/');
     return browser.getText('#title-text > a').then(function(title) {
     title.should.equal('Platform Configurator');
     });
  });
 
    it('should assert sub heading', function() {
    
    return browser.getText('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > h3').then(function(text) {
    text.should.equal('API');
    console.log(text);
        });
   });
           
   
   it('should click on selenium', function() {
    
   return browser.click('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)').then(function() {
   return browser.getAttribute('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)','class').then(function(attr){
   attr.should.equal('api-button blue_over blue_select');
   console.log(attr);
  
         });
    
     });
    
   });
   
   
   
   it('should click on device menu', function() {
    
   return browser.click('button.btn.btn-default.btn-display.select-logo.select-a-device').then(function() {
   return browser.getAttribute('#desktop > div > div:nth-child(1) > div','class').then(function(attr){
   attr.should.equal('list-element');
   console.log(attr);
  
         });
    
     });
    
   });
   
   
   
   
   it('should select PC from menu', function() {
    
   return browser.click('#desktop > div > div:nth-child(1) > div').then(function() {
   return browser.getAttribute('#desktop > div > div:nth-child(1) > div','class').then(function(attr){
   attr.should.equal('list-element selected');
   console.log(attr);
  
         });
    
     });
    
   });
   
   
   it('should click on  OS menu', function() {
    
   return browser.click('#main-content > div > ng-view > div > div.spc-item.choice-os.configurator-select.col-md-12 > spc-select > div > button.btn.btn-default.btn-display.select-logo.select').then(function() {
   return browser.getAttribute('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span','class').then(function(attr){
   attr.should.equal('ng-binding');
   console.log(attr);
  
         });
    
     });
    
   });
   
   
   it('should select WinXP', function() {
    
   return browser.click('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span').then(function() {
   
     });
    
   });
   
   
    it('should click on  Browser menu', function() {
    
   return browser.click('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > button.btn.btn-default.btn-display.select-logo.select-a-browser').then(function() {
   return browser.getText('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a').then(function(text){
   text.should.equal('Chrome');
   console.log(text);
  
         });
    
     });
    
   });
   
   
   
   it('should click on chrome tab', function() {
    
   return browser.click('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a').then(function() {
   return browser.getText('#chrome > div:nth-child(2) > div:nth-child(4) > div > span.el-text.ng-scope > span').then(function(text){
   text.should.equal('40.0');
   console.log(text);
  
         });
    
     });
    
   });
   
   
   it('should select 40', function() {
    
   return browser.click('#chrome > div:nth-child(2) > div:nth-child(4)').then(function() {
   return browser.getAttribute('#chrome > div:nth-child(2) > div:nth-child(4) > div','class').then(function(attr){
   attr.should.equal('list-element selected');
   console.log(attr);
   
         });
    
     });
    
   });
   
   
   
   
   it('should click on java tab', function() {
    
   return browser.click('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li:nth-child(1) > a').then(function() {
   return browser.getAttribute('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li.ng-scope.active', 'class').then(function(attr){
   attr.should.equal('ng-scope active');
   console.log(attr);
  
         });
    
     });
    
   });
   
   
   it('should click on copy button', function() {
    
   return browser.click('#copy-code');
    
   });
   
   it('should check session', function() {
    return browser.sessions().then(function(sessionid){
    var id = sessionid
    console.log(id);
      });
   });
   
   
   
});

describe('check if session still exist', function() {
  
    it('should check if session still exist', function() {
    return browser.sessions().then(function(sessionid){
    var id1 = sessionid
    console.log(id1);
      });
   });
});