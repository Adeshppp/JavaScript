
//declare obj by using "const" keyword
// const course={
//     lecture:10,
//     section:3,
//     title:JSON,
//     notes:{
//         intro:"Welcome to JS"
//     },
//     enroll(){
//         console.log("You are successfullu enrolled");
//     }
// }
// course.enroll();
// console.log(course)
// course.price=999;
// course.section=5;// we can redeclare object variable bcoz object is reference data type unlike premitive data types.



//======================================================================================================================================



//we can use factory function or constructor function for reusability of a code.

//Factory Function

// function createCourse(title){
//     return{
//         lecture:10,
//         section:3,
//         name:title,
//         title:title,
//         enroll(){
//             console.log("You are successfully enrolled in "+this.name+" course");
//             console.log("WELCOME TO "+this.name);
//         }
//     }
    
// }

// const JS=createCourse("JavaScript");
// JS.enroll();

// const java = createCourse("JAVA");
// java.enroll();

//======================================================================================================================================


//Constructor Function

// naming convention should be same as class name as it is constructor.
// here we are creating an object by using "new" keyword.

// function Course(title){
//     this.title=title;
//     this.checkEnrollment = function(){
//         if(this.enrollment==1) console.log("You have enrolled in "+this.title+" course.");
//         else console.log("You have not enrolled in "+this.title+" course.");
// }
//     this.enroll=function(){
//         this.enrollment=1;
//         console.log("You are successfully enrolled in "+this.title+". Welcome to the Course!!!");
//     }
// }


// const JS = new Course("JavaScript");
// const JAVA= new Course("JAVA");

// JAVA.enroll();
// JS.enroll();
// JAVA.checkEnrollment();
// JS.checkEnrollment();


// delete course.title;
// //adding new method 
// course.checkEnrollment= function(){
//     console.log("30 Users are enrolled...!")
// }
// console.log(course)
// course.checkEnrollment();


//======================================================================================================================================



