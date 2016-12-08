'use strict';  
  
  
  /*  
module.exports = {  
    getElem: {  
        
        getTitle: browser.getText('#title-text > a'),  
        getSubHeading: browser.getText('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > h3'),  
        buttonSelenium: browser.element('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div.api-button.blue_over.blue_select'),
        buttonSeleniumCheck: browser.getAttribute('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)','class'), 
        deviceMenu: browser.element('button.btn.btn-default.btn-display.select-logo.select-a-device'),
        deviceMenuCheck: browser.getAttribute('#desktop > div > div:nth-child(1) > div','class'),
        PC: browser.element('#desktop > div > div:nth-child(1) > div'),
        PCCheck: browser.getAttribute('#desktop > div > div:nth-child(1) > div','class'),
        OSMenu: browser.element('#main-content > div > ng-view > div > div.spc-item.choice-os.configurator-select.col-md-12 > spc-select > div > button.btn.btn-default.btn-display.select-logo.select'),
        OSMenuCheck: browser.getAttribute('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span','class'),
        xpElem: browser.element('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span'),
        browserMenu: browser.element('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > button.btn.btn-default.btn-display.select-logo.select-a-browser'),
        browserMenuCheck: browser.getText('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a'),
        chromeTab: browser.click('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a'),
        chromeTabCheck: browser.getText('#chrome > div:nth-child(2) > div:nth-child(4) > div > span.el-text.ng-scope > span'),  
        select40: browser.element('#chrome > div:nth-child(2) > div:nth-child(4)'),
        select40Check: browser.getAttribute('#chrome > div:nth-child(2) > div:nth-child(4) > div','class'),
        javaTab: browser.element('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li:nth-child(1) > a'),
        javaTabCheck: browser.getAttribute('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li.ng-scope.active', 'class'),
         copyButton: browser.element('#copy-code'),
         checkSession: browser.sessions()
    },  
 */    
  
  
module.exports = {  
    getElem: {  
        
        getTitle: browser.getText('#title-text > a'),  
        getSubHeading: browser.getText('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > h3'),  
        buttonSelenium: browser.element('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)'),
        buttonSeleniumCheck: browser.getAttribute('#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)','class'), 
        deviceMenu: browser.element('button.btn.btn-default.btn-display.select-logo.select-a-device'),
        deviceMenuCheck: browser.getAttribute('#desktop > div > div:nth-child(1) > div','class'),
        PC: browser.element('#desktop > div > div:nth-child(1) > div'),
        PCCheck: browser.getAttribute('#desktop > div > div:nth-child(1) > div','class'),
        OSMenu: browser.element('#main-content > div > ng-view > div > div.spc-item.choice-os.configurator-select.col-md-12 > spc-select > div > button.btn.btn-default.btn-display.select-logo.select'),
        OSMenuCheck: browser.getAttribute('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span','class'),
        xpElem: browser.element('#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span'),
        browserMenu: browser.element('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > button.btn.btn-default.btn-display.select-logo.select-a-browser'),
        browserMenuCheck: browser.getText('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a'),
        chromeTab: browser.click('#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a'),
        chromeTabCheck: browser.getText('#chrome > div:nth-child(2) > div:nth-child(4) > div > span.el-text.ng-scope > span'),  
        select40: browser.element('#chrome > div:nth-child(2) > div:nth-child(4)'),
        select40Check: browser.getAttribute('#chrome > div:nth-child(2) > div:nth-child(4) > div','class'),
        javaTab: browser.element('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li:nth-child(1) > a'),
        javaTabCheck: browser.getAttribute('#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li.ng-scope.active', 'class'),
         copyButton: browser.element('#copy-code'),
         checkSession: browser.sessions()
    },  
      
    go: function() {  
        browser.url('https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/'); //overrides baseURL  
          
    },  
      
    verifyPage: function() {  
        var getelem = this.getElem;  
          
       /*  getelem.getTitle.should.equal('Platform Configurator');
          getelem.getSubHeading.should.equal('API');
          getelem.buttonSelenium.click();
          getelem.buttonSeleniumCheck.should.equal('api-button blue_over blue_select'); 
         */ 
           /* 
         getelem.getTitle.then(function(text){
         text.should.equal('Platform Configurator')
         }); 
         getelem.getSubHeading.then(function(text){
         text.should.equal('API')
         }); 
         */ 
          
         getelem.buttonSelenium.waitForVisible(10000)
         getelem.buttonSelenium.click();
          
         /* 
         getelem.buttonSeleniumCheck.then(function(text){
         text.should.equal('api-button blue_over blue_select')
         }); 
          getelem.deviceMenu.click();
         getelem.deviceMenuCheck.then(function(text){
         text.should.equal('list-element')
         }); 
           getelem.PC.click();
         getelem.PCCheck.then(function(text){
         text.should.equal('list-element selected')
         }); 
           getelem.OSMenu.click();
         getelem.OSMenuCheck.then(function(text){
         text.should.equal('ng-binding')
         }); 
             getelem.xpElem.click();
             
          getelem.browserMenu.click();
         getelem.browserMenuCheck.then(function(text){
         text.should.equal('Chrome')
         }); 
            getelem.chromeTab.click();
         getelem.chromeTabCheck.then(function(text){
         text.should.equal('40.0')
         }); 
              getelem.select40.click();
         getelem.select40Check.then(function(text){
         text.should.equal('list-element selected')
         }); 
                getelem.javaTab.click();
         getelem.javaTabCheck.then(function(text){
         text.should.equal('ng-scope active')
         }); 
                 getelem.copyButton.click();
              getelem.checkSession; 
            */    
    }  
};