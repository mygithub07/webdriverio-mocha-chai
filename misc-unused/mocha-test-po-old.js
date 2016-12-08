var configpage = require('./page-objects/ConfigPage.js');  
  
describe('config page test', function() {  
  
   before(function() {   

    var chai = require('chai');
    var should = require('chai').should();
    var expect = require('chai').expect();
  });
  
  it('should navigate to config page', function() {  
    configpage.go();  
  }); 
   
    
  it('should select options on config page', function() {  
   configpage.verifyPage();
  
  });  
  
  /*
it('test', function() {
   

         browser.waitUntil(function () {
  return configpage.getElem.buttonSelenium.click()
}, 5000, 'expected text to be different after 5s');

       
              browser.waitUntil(function () {
  return configpage.getElem.buttonSeleniumCheck.then(function(text){
         text.should.equal('api-button blue_over blue_select')
}, 5000, 'expected text to be different after 5s');
*/
   /*      
         configpage.getElem.buttonSelenium.click();
         configpage.getElem.buttonSeleniumCheck.then(function(text){
         text.should.equal('api-button blue_over blue_select');
        
         }); 
          
  }); 
*/ 
  
});