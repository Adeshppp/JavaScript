
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
//         title:title,
//         notes:{
//             intro:"Welcome to JS"
//         },
//         enroll(){
//             console.log("You are successfully enrolled");
//         }
//     }
    
// }

// const course = createCourse("JS");
// course.enroll()
// console.log(course);

//======================================================================================================================================


//Constructor Function

//naming convention should be same as class name as it is constructor.
// function Course(title){
//     this.title=title;
//     this.enroll=function(){
//         console.log("You are successfully enrolled");
//     }
// }

// const course= new Course("JavaScript");
// course.enroll()
// console.log(course)
// delete course.title;
// course.checkEnrollment= function(){
//     console.log("30 Users are enrolled...!")
// }
// console.log(course)
// course.checkEnrollment();


//======================================================================================================================================



