
var should = require('chai').should();
var expect = require('chai').expect();
var myCode = require('./functionTest.js')

describe('test partial1', function() {

 it('should pass partial1', function() {
     
   myCode.owner.should.haveProperties(myCode.partial1); 
     });
  });
