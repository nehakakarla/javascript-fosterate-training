class parent{ 
    constructor(name){
        this.name=name;
    }
    hi(){
        console.log(`Hello ${this.name}`);
    }
}
class child extends parent{
    hello(){
        console.log(`Hello ${this.name}`);
    }
}
let a=new child("Neha");
a.hi();
a.hello();

class Parent{ 
    constructor(name){
        this.name=name;
    }
    salute(){
        console.log(`Hello ${this.name}`);
    }
}
class Child extends Parent{
    constructor(name){
        console.log("Creating child class");
        super(name);
    }
}
let b=new Child("Neha");
b.salute();

class Person{ 
    constructor(name){
        this.name=name;
        this.age="Greater than 18";
    }
    details(){
        console.log(`Name: ${this.name}`);
    }
}
class Student extends Person{
    constructor(name){
        super(name);
        this.age="18";
    }
    details(){
        console.log(`Name: ${this.name}`);
        console.log('Age: ' + this.age);
    }
}

let p=new Student("Neha");
p.details();