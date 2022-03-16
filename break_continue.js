console.log("Break and Continue");

//break
for(let i=1;i<=5;i++){
    if(i==3){
        console.log("break");
        break;
    }else{
        console.log(i);
    }
}

//continue
for(let i=1;i<=5;i++){
    if(i==3){
        console.log("continue");
        continue;
    }else{
        console.log(i);
    }
}