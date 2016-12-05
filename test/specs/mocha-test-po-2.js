var HomePageObject = require("./page-objects/ConfigPage-copy.js")

describe("config page", function() {
    
    var home;
    
    before(function() {
       home = new HomePageObject(); 
       var chai = require('chai');
    var should = require('chai').should();
    var expect = require('chai').expect();
    
 });
    
    
    it('should assert page title', function() {
     
     browser.url(home.url);
     browser.getText(home.title).should.equal('Platform Configurator');
   
  });
  
  
    it('should assert sub heading', function() {
    
    browser.getText(home.subheading).should.equal('API');
        
   });
});
/*
describe('check if session still exist', function() {
  
    it('should check if session still exist', function() {
    var id1 =browser.sessions();
    
    console.log(id1);
     
   });  
}); */
