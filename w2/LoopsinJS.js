
// for loop
for(let i=1;i<=10;i++) console.log(5*i)

// while loop

let i=0;
while(i<10){
    console.log("Namaste World!");
    i++;
}

//do while loop
let j=0;
do{
    console.log("DO While loop!!!")
    j++;
}
while(j<10)

//for in loop

let animal={
    name:"zebra",
    leg : 4
}
for (let key in animal) {
    console.log(key,animal[key]);
}

let names=["Adesh", "Piyush", "Sakshi"];
for(let a in names){
    console.log(a, names[a]);// a is index
}

for(let a of names){
    console.log(a)// a is value at index a.
}