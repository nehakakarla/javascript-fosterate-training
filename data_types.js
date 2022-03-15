console.log("Data Types");

//String
let str1="String" //can be surrounded by "" (or) '' (or) ``
let str2=`It is a ${str1}`;
console.log(str1);
console.log(str2);

//Number
let num=3; //can be integer (or) float (or) exponents
console.log(num);
num=3.3;
console.log(num);
num=3e-1;
console.log(num);

//BigInt
let bigNum=1009203746513864839n;
console.log(bigNum);
//console.log(bigNum+1); -- error -- TypeError: Cannot mix BigInt and other types, use explicit conversions

//Boolean
let b=true;
console.log(b);

//Undefined
let undef;
console.log(undef)

//null
let n=null;
console.log(n);

//Symbol
//if 2 variables are of type symbol, then, even if their values are same they are considered unique
let sym1=Symbol("JS"), sym2=Symbol("JS");
console.log(sym1);
console.log(sym2);

//Object
let obj={
    x:5,
    y:6,
}
//how to access them?

//Type and TypeOf
str1=5;
console.log(str1);
typeof(str1);
typeof(str2);