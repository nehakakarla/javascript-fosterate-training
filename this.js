//Global Scope
let a = this;
console.log(a);
this.name = 'Sarah';
console.log(window.name); // Sarah

//Function
function greet() {
    console.log(this);
}
greet();

//Constructor Function
function Person() {
    this.name = 'Neha';
    console.log(this);
}
let person1=new Person();
console.log(person1.name);

//Object
const person={
    name:'Neha',
    age:19,
    greet(){
        console.log(this);
        console.log(this.name);
    }
}
person.greet();

//Inner Function
const details={
    name:'Thirmai',
    age:19,
    hi(){
        console.log(this);
        console.log(this.age);
        function innerFunc(){
            console.log(this);
            console.log(this.age); 
        }
        innerFunc();
    }
}
details.hi();

//Arrow Function
const sayHello={
    name:'Pallavi',
    sayHi(){
        let hi=()=>console.log(this.name);
        hi();
    }
}
sayHello.sayHi();