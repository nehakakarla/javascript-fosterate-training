let a={     
    name: "Neha",
    age: 19
};
console.log(a);
console.log(a.name);
console.log(a.age);

a.num=01
console.log(a.num);

delete a.age
console.log(a);


let b={
    name: "Thirmai",
    "is short": true
};
console.log(b["is short"]);

let c={
    name: "Thirmai",
    id: 2,
    age: 19
};
for(let key in c){
    console.log(key);
    console.log(c[key])
}

let d={};
console.log("name" in d);
console.log(d.noSuchProperty===undefined);

function user(name, id) {
    return {
      name: name,
      id: id
    };
}
let e=user("Thirmai", 2);
console.log(e.id);