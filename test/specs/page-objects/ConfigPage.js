'use strict'; 
 

     var HomePage =(function(){

function HomePage() {
    this.title="#title-text > a";
    this.subheading="#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > h3";
    this.url = "https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/";
    this.buttonSelenium = "#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)";
    this.buttonSeleniumCheck = "#main-content > div > ng-view > div > div:nth-child(1) > div.choice-buttons.choice-api > div:nth-child(2)";
    this.deviceMenu ="button.btn.btn-default.btn-display.select-logo.select-a-device";
    this.deviceMenuCheck= "#desktop > div > div:nth-child(1) > div";
    this.PC= "#desktop > div > div:nth-child(1) > div";
    this.PCCheck="#desktop > div > div:nth-child(1) > div";
    this.OSMenu= "#main-content > div > ng-view > div > div.spc-item.choice-os.configurator-select.col-md-12 > spc-select > div > button.btn.btn-default.btn-display.select-logo.select";
    this.OSMenuCheck="#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span";
    this.xpElem= "#operating-system > div > div:nth-child(5) > div > span.el-text.ng-scope > span";
    this.browserMenu="#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > button.btn.btn-default.btn-display.select-logo.select-a-browser";
    this.browserMenuCheck="#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a";
    this.chromeTab="#main-content > div > ng-view > div > div.spc-item.configurator-select.col-md-12.webapp-browsers > div.choice-browser.fadein.fadeout > spc-select > div > div > ul > li:nth-child(2) > a";
    this.chromeTabCheck="#chrome > div:nth-child(2) > div:nth-child(4) > div > span.el-text.ng-scope > span";
    this.select40="#chrome > div:nth-child(2) > div:nth-child(4)";
    this.select40Check="#chrome > div:nth-child(2) > div:nth-child(4) > div"
    this.javaTab="#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li:nth-child(1) > a";
    this.javaTabCheck="#main-content > div > ng-view > div > div.spc-item.choice-code.configurator-select.col-md-12 > div > ul > li.ng-scope.active";
    this.copyButton="#copy-code";
         //checkSession: browser.sessions()
  
};


     function go() {  
        browser.url('https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/');   
          
    };

return HomePage;

})();

module.exports = HomePage;
  
