console.log("Operators");
let a,b;

//Assignment
a=5;
a+=4;
a-=3;
a*=2;
a/=1;
console.log(a);

//Arithmetic
a=5;
b=4;
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Quotient:",a/b);
console.log("Remainder:",a%b);
console.log(a++);  //post-increment
console.log(++a);  //pre-increment
console.log(b++);  //post-decrement
console.log(++b);  //pre-decrement
console.log("a^b:",a**b); 

//Comparison
console.log(a==b);
console.log(a!=b);
console.log(a===b); //equal and same data type
console.log(a!==b); //equal and different data type (or) not equal at all
console.log(a>=b);
console.log(a<=b);

//Logical
console.log(a>5 && b>5);
console.log(a<5 || b<5);
console.log(!true);

//Bitwise
console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(a>>b);
console.log(a<<b);
console.log(a>>>b);
console.log(~a);

//String
a="JS"
b="Learning "+a;
console.log(b);