
//console.log("hello world");
//Arithmatic operator
//  let a= 20;
//  let b=30;
//   console.log("a+b=", a%b);
// console.log("a= ", a , "b= ", b);

//object creation
const build ={
  name:"silicon institute",
  roll:50,
  is_following:true,

};
console.log(build);
build["roll"] = build["roll"]+10;
console.log(build["roll"]);
let Name ="Alok";
Name ="aditya";
console.log("Name: ",Name);
console.log(build.is_following);

// let a=10;
// let b=6;
//  a**=4;
// //++a;
// console.log("a+= ",a+=1 ,"b= ",b+=1);
// console.log("a= ",a ,"b= ",b);
// console.log("a**= ",a**=2);
//comparision operator
 let a=6;
 let b=5;
//  console.log("a!=b",a!=b);
let cond1=a>b;
let cond2= a===8;
console.log("cond1||cond2= ",!(cond1||cond2));
let age=9;
if (age>3)
{
  console.log("congatulation");
}
let mode="green";
let color;
if (mode === "dark")
{
  color="black";

}else if(mode==="blue")
{
  color="pink";
}else if(mode==="green")
{
  color="yellow";
}
else if(mode==="urmila"){
  color="marin blue";
}                             
else{
  color="red";
}
console.log(color);

//conditional
 
let year=25;
let result= year >=18 ? console.log("adult") :console.log("not adult");


console.log(result);

//alert("hello world");
// let name=prompt("enter a number: ");
// if (name%5 ===0)
// {
//   console.log("number is multiple of 5",name);
// }
// else{
//   console.log("not ivisible by 5");
// }

//score
let grade;
let score=prompt("enter the score");
if(score>=80 && score<100)
{
  grade='A';
}else if(score>=70 && score<89)
{
  grade='B';
}else if(score>50 && score<59)
{
  grade='C';
}
else{
  grade='F';
}
console.log(grade);



