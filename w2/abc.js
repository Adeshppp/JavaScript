var bool=true; // boolean
var num=5; //number
var s='checking data types'; //string
var n=null; // object
var udf;//undefined
var no=34422334322434545n;//big int
console.log(typeof(no));


// Type conversion

let a=5;
let b="6";
let sum=a+b;
console.log(sum);

sum=a+Number(b);// Explicit coersion
console.log(sum);

sum=123+''; // Implicit coersion
console.log(sum);
console.log(typeof(sum));
