class a{
    constructor() {
      this.name="Neha";
    }
    printName() {
      console.log(this.name);
    }
}
let p=new a();
p.printName();

class b{
    constructor(name) {
      this.name=name;
    }
    printName() {
      console.log(this.name);
    }
}
let q=new b("Neha");
q.printName();

let c=class{
    constructor(newName){
        this.newName=newName;
    }
    get name(){
        return this.name;
    }
    set name(N){
        this.name=N;
    }
}
let r=new c("Neha");
console.log(c.name);