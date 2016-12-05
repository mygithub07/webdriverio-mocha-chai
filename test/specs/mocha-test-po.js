var HomePageObject = require("./page-objects/ConfigPage-copy.js")

describe("config page", function() {
    
    var home;
    
    before(function() {
       home = new HomePageObject(); 
       var chai = require('chai');
    var should = require('chai').should();
    var expect = require('chai').expect();
   
      var login = "login123";
     var pwd = "password123";
 
      var loginPwd = []
      for (var i=0;i<1;++i){
        loginPwd.push({log: login, password: pwd});
        console.log(loginPwd[0].log);
         console.log(loginPwd[0].password);
        } 
        
    });

    it("should click selenium", function(){
       
       browser.url(home.url);
       browser.click(home.buttonSelenium);
       browser.getAttribute(home.buttonSeleniumCheck,'class').should.equal('api-button blue_over blue_select');
    
        
        });
        
        
       it('should click on device menu', function() {
    
    browser.click(home.deviceMenu);
   browser.getAttribute(home.deviceMenuCheck,'class');
  
   }); 
   
   
    it('should select PC from menu', function() {
    
   browser.click(home.PC);
   var attr=browser.getAttribute(home.PCCheck,'class');

   });
   
      it('should click on  OS menu', function() {
    
   browser.click(home.OSMenu);
   browser.getAttribute(home.OSMenuCheck,'class').should.equal('ng-binding');
 
   });
   
   
   it('should select WinXP', function() {
    
   browser.click(home.xpElem);
    
   });
   
   
    it('should click on  Browser menu', function() {
     browser.click(home.browserMenu);
     browser.getText(home.browserMenuCheck).should.equal('Chrome');
    
   });
   
   it('should click on chrome tab', function() {
    
      browser.click(home.chromeTab);
    browser.getText(home.chromeTabCheck).should.equal('40.0');
    
   });
   
      
   it('should select 40', function() {
    
    browser.click(home.select40);
    browser.getAttribute(home.select40Check, 'class').should.equal('list-element selected');

   });
   
       
   it('should click on java tab', function() {
    
    browser.click(home.javaTab);
    browser.getAttribute(home.javaTabCheck, 'class').should.equal('ng-scope active');
    
   });
   
   it('should click on copy button', function() {
    
    browser.click(home.copyButton);
    
   });
   
});
/*
describe('check if session still exist', function() {
  
    it('should check if session still exist', function() {
    var id1 =browser.sessions();
    
    console.log(id1);
     
   });  
}); */
