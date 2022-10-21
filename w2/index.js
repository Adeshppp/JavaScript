let animal={
    name:"Cow",
    legs:4

}
let legsProp="legs";
console.log(animal[legsProp]);//Bracket notation
console.log(animal["name"]);
console.log(animal.legs);//Dot notation


// Arrays
let selectBooks = ["The rudest book ever","Think and grow rich","Rich dad Poor dad","Invisible Man"]
console.log(selectBooks);
console.log(selectBooks[0]);
console.log(selectBooks.length);


// Function

function helloWorld(Fname,Lname){
    console.log("Hello " + Fname+" "+Lname);
}
helloWorld("Adesh","Padwal");

function mod(a,b){
    console.log("mod of "+a+" and "+b+" is "+a%b+".");
}
mod(15,6);


