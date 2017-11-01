'use strict';
var expect = require('chai').expect;
var npmEs6WebpackSkeleton= require('../dist/app.js');
var math = npmEs6WebpackSkeleton.math; 
describe('#math', function() {
    it('should return the square-root', function() { 
        expect(math.sqrt(9)).to.equal(3);
    }); 
});