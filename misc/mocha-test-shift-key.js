var webdriverio = require('webdriverio');
var should = require('chai').should();
var expect = require('chai').expect();
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};



describe('sauce labs page test', function() {



   before(function() {
   
    browser=webdriverio.remote(options)
    return browser.init()
    
  });


   after(function() {
 
    return browser.end();
    
  });
 
   it('should select multiple', function() {
    
     //browser.url('http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select_multiple');
     browser.url('http://examples.sencha.com/extjs/6.0.2/examples/classic/multiselect/multiselect-demo.html');
     //var ElemList= browser.elements('body > form > select') ; 
     //browser.elements('css selector','body > form > select', function(err,ElemList){ 
    // console.log(ElemList.value.ELEMENT[1]);
    //.x-component.x-border-box.x-mask.x-component-default
     return browser.elements('ul#boundlist-1010-listEl li').then(function(ElemList){
     console.log(ElemList);
     
     
      //browser.click('body > form > select > option:nth-child(1)').then(function(){
     // browser.moveTo(ElemList.value[1].ELEMENT, 0, 0) ;
    //  browser.keys('Shift');
    //  browser.click('body > form > select > option:nth-child(2)').then(function(){
    //  browser.moveTo(ElemList.value[2].ELEMENT, 0, 0) ;
    //  browser.click('body > form > select > option:nth-child(3)').then(function(done){
   //   done();
   //   });
     //   });
   //   });
    });
 });
    
});