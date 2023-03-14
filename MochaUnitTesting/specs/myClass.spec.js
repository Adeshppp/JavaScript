var MyClass = require("../src/myClass.js")
var sinon = require("sinon")
var myObj=new MyClass();
var chai = require("chai");
var expect = chai.expect;

describe("Test suit", function(){
    it("Test the add method", function(){
        expect(myObj.add(1,2)).to.be.equal(3);
    })
    it("Spy the add method", function(){
        var spy = sinon.spy(myObj,"add");
        var arg1 = 1;
        var arg2 = 1;
        myObj.callAnotherMethod(arg1,arg2);
        // sinon.assert.calledOnce(spy);
        // sinon.assert.calledTwice(spy);

        //alternate way by using expect
        expect(spy.calledOnce).to.be.true;
        // expect(spy.calledTwice).to.be.true;

        expect(spy.calledWith(arg1,arg2)).to.be.true;
        // expect(spy.calledWith(6,arg2)).to.be.true;
        })

});