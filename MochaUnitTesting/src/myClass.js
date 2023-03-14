class MyClass{
    constructor(){
        console.log("Initiate");
    }
    add=(arg1, arg2)=> arg1+arg2;
    callAnotherMethod(arg1,arg2){
        var res = this.add(arg1, arg2); 
        return res;
    }

    callTheCallBack(callback){
        callback();
    }
}

module.exports = MyClass;