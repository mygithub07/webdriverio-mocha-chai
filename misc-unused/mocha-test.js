/*var webdriverio = require('webdriverio');
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
}; */



describe('sauce labs page test', function() {



   before(function() {
   
   //browser=webdriverio.remote(options)
   // browser=webdriverio.multiremote(options)
   // return browser.init()
    var chai = require('chai');
    var should = require('chai').should();
    var expect = require('chai').expect();
  });

/*   after(function() {
 
    return browser.end();
    
  });  */
 
   it('should assert page title', function() {
     
     browser.url('https://docs.saucelabs.com/reference/platforms-configurator/?_ga=1.5883444.608313.1428365147#/');
     browser.getText('#title-text > a').should.equal('Platform Configurator');
     //return browser.getText('#title-text > a').then(function(title) {
     //title.should.equal('Platform Configurator');
     //});
  });
 
    it('should assert sub heading', function() {
    
    var subHeading=browser.getText('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > h3');
    subHeading.should.equal('API');
    console.log(subHeading);
        
   });
           
   
   it('should click on selenium', function() {
    
   browser.click('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)');
   var attr=browser.getAttribute('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)','class');
   attr.should.equal('api-button blue_over blue_select');
   console.log(attr);
  
    
   });
   
   
   
   it('should click on device menu', function() {
    
    browser.click('button.btn.btn-default.btn-display.select-logo.select-a-device');
   var attr= browser.getAttribute('#desktop > div > div:nth-child(1) > div','class')
   attr.should.equal('list-element');
   console.log(attr);
  
   });
   
   
   
   
   it('should select PC from menu', function() {
    
   browser.click('#desktop > div > div:nth-child(1) > div');
  var attr=browser.getAttribute('#desktop > div > div:nth-child(1) > div','class');
   attr.should.equal('list-element selected');
   console.log(attr);
  

   });
   
   
   it('should click on  OS menu', function() {
    
   browser.click('#main-content > div > ng-view > div > div.spc-item.choice-os.configurator-select.col-md-12 > spc-select > div > button.btn.btn-default.btn-display.select-logo.select');
   var attr=browser.getAttribute('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span','class');
   attr.should.equal('ng-binding');
   console.log(attr);

    
   });
   
   
   it('should select WinXP', function() {
    
   browser.click('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span');
    
   });
   
   
    it('should click on  Browser menu', function() {
    
   browser.click('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > button.btn.btn-default.btn-display.select-logo.select-a-browser');
   var text= browser.getText('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a');
   text.should.equal('Chrome');
   console.log(text);
    
   });
   
   
   
   it('should click on chrome tab', function() {
    
   browser.click('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a');
   var text=browser.getText('#chrome > div:nth-child(2) > div:nth-child(4) > div > span.el-text.ng-scope > span');
   text.should.equal('40.0');
   console.log(text);

    
   });
   
   
   it('should select 40', function() {
    
    browser.click('#chrome > div:nth-child(2) > div:nth-child(4)');
   var attr=browser.getAttribute('#chrome > div:nth-child(2) > div:nth-child(4) > div','class');
   attr.should.equal('list-element selected');
   console.log(attr);

   });
   
   
   
   
   it('should click on java tab', function() {
    
   browser.click('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li:nth-child(1) > a');
   var attr= browser.getAttribute('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li.ng-scope.active', 'class');
   attr.should.equal('ng-scope active');
   console.log(attr);

    
   });
   
   
   it('should click on copy button', function() {
    
    browser.click('#copy-code');
    
   });
   
   it('should check session', function() {
    var id =browser.sessions();
    console.log(id);
    
   });
   
   
   
});

describe('check if session still exist', function() {
  
    it('should check if session still exist', function() {
    var id1 =browser.sessions();
    
    console.log(id1);
     
   });
});