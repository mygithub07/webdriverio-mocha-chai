var webdriverio = require('webdriverio');
var should = require('chai').should();
var expect = require('chai').expect();
/*var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};*/



describe('sauce labs page test', function() {



  // before(function() {
   
    //browser=webdriverio.remote(options);
    //return browser.init();
   // var browser = this.browser;
    //return browser.init();
    
 // }); 


   after(function() {
 
    return browser.end();
    
  });
 
   it('should assert page title', function() {
     var browser = this.browser;
     browser.init(this.browser, function() {
     //browser.get('https://docs.saucelabs.com/reference/platforms-configurator/?_ga=1.5883444.608313.1428365147#/');
     browser.get('https://docs.saucelabs.com/reference/platforms-configurator/?_ga=1.5883444.608313.1428365147#/', function(){
     browser.elementByCssSelector('#title-text > a',function(err, elem){
     browser.text(elem, function(err, txt){
     txt.should.equal('Platform Configurator');
           });
       });
    });
    
  });
     
  });
 
    it('should assert sub heading', function() {
    var browser = this.browser;
    browser.elementByCssSelector('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > h3',function(err, elem){
     browser.text(elem, function(err, txt){
     txt.should.equal('API');
           });
       });
    
   
   });
           
   
   it('should click on selenium', function() {
    var browser = this.browser;
    browser.elementByCssSelector('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)',function(err, elem){
    browser.clickElement(elem);
           
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
   
   
});