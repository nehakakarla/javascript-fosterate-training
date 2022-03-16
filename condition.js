let a=5;

//if statement
if(a>=3){
    console.log("true");
}

//if..else statement
if(a<3){
    console.log("true");
}else{
    console.log("false");
}

//if..else if statement
if(a<3){
    console.log("<");
}else if(a==3){
    console.log("=");
}else{
    console.log(">");
}

//Nested if..else statement
if(a>=3){
    if(a==3){
        console.log("equal");
    }else{
        console.log("Greater than");
    }
}else{
    console.log("Less than");
}

//switch
switch(a){
    case 1:
        a='1';
        break;
    case 2:
        a='2';
        break;
    case 3:
        a='3';
        break;
    case 4:
        a='4';
        break;
    case 5:
        a='>4';
        break;
}
console.log(a);