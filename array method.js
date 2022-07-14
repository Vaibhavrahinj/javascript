// for each method 1
// let nums=[18,34,83,44, ,23,54];
// nums.forEach((n,i,nums)=>{
//     // first argument = n means value as like 12
//     //second argument = i means index value 0,1,2,3
//     // third argument = nums means all array value or printed array value
// //    console.log(n,i,nums);

// })
// for each method 2
// var a=["rahul","akash","Nitin","Bharati"];

// a.forEach(feach);
// function feach(value,index){
//     console.log(index,value);
// }

// const array=[{
//     fullname:'abc def',
//     age:22,
// },
// {
//     fullname:'xyz pqr',
//     age:23,
// }
// ];

// const modarr=array.map(arr=>{

//     const [firstName,lastName]=arr.fullname.split(' ');
//     return {
//         firstName,
//         lastName,
//         age:arr.age,

//     }

// });

// console.log('expected Array',modarr);

// ****************************************************************************

// function sum(a=5,b=7){
//     console.log(a+b);
//      a+b;
//   }
//   sum(3,8,7);
// *************************************************

// class student {
//   constructor(names) {
//     this.names = names;
//     console.log("constructer Function");
//   }
//   hello() {
//     console.log("hello" + this.names);
//   }
// }
// let a = new student("vaibhav");
// a.names = "Hi ";
// a.hello();

// ******************************************************
let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); 
