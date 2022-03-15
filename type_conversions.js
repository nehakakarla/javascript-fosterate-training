console.log("Type Conersions");
let a;

//Implicit Conversion
//to string
a="3"+2; //valid for boolean, undefined, null, number
console.log(a);
//to number
a="3"-2; //converts to number if operator is - (or) * (or) /
console.log(a);
//to NaN
a="Hi"-"Hello"; //converts if operator b/w strings is - (or) * (or) /
console.log(a); // output = NaN (Not-a-Number)
//bool to number
a=4-true;
console.log(a);
//null to number
a=null+12;
console.log(a);
//undefined with any type returns NaN
a=undefined+true;
console.log(a);

//Explicit Conversion
//to number
a=Number("1");
console.log(a);
a=Number(null);
console.log(a);
a=Number("JS");
console.log(a);
//to string
a=String(21);
console.log(a);
a=true.toString();
console.log(a);
//to Boolean
a=Boolean(null); //same output for '' (or) 0 (or) undefined (or) NaN
console.log(a);
a=Boolean(' ');
console.log(a);