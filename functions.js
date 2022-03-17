//function without parameters
function hello(){
    console.log("Hello");
}
hello();

//function with paramenter
function num(n){
    console.log(n);
}
num(1);

//function with return statement
function add(a,b){
    let sum=a+b;
    return sum;
}
console.log(add(1,2));

//function expressions
let x=function(a){return a+a}
let y=x(4);
console.log(y);

//global scope without declaring
function greet() {
    a="Hello"
}
greet();
console.log(a);

//local scope
/*function greet() {
    let a="Hello" -- error -- a is not defined
}
greet();
console.log(a);*/ 

//scope of local variable and block scoped variable
/*let p=4;
function sub(){
    let b=4;
    console.log(p-b);
    if(b==4){
        let c=4;
        console.log(a-b-c);
    }
    console.log(p-b-c); -- error -- c is not defined
}
sub();*/

//hoisting
/*console.log(q); 
let q;*/

//recursive functions
function print(numb){
    if(numb>0){
        console.log(numb);
        numb-=1;
        print(numb);
    }
}
print(3);

//arrow functions with zero arguments
let hello1=()=>{
    console.log("Hello");
}
hello1();

//arrow functions with one argument
let hi=(z)=>{
    console.log(z);
}
hi("Hi");

//arrow function as expression
let age=5;
let welcome=(age<18)?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome();