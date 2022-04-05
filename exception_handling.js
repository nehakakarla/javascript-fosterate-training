const numerator=100, denominator='a';
try{
    console.log(numerator/denominator);     
    console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}


try{
    console.log(numerator/denominator);
    console.log(a);
}
catch(error){
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}
finally{
    console.log('Finally will execute every time');
}

setTimeout(function() {
    try {
        console.log(a);
    } catch {
        console.log( "error is caught" );
    }
}, 3000);

const number=5;
try{
    if(number>50){
        console.log('Success');
    }else{
        throw new Error('The number is low');
    }
    console.log('hello');
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
}


try{
    throw new Error('This is the throw');
}
catch(error){
    console.log('An error caught');
    if( number + 8 > 10) {
        console.log('Error message: ' + error); 
        console.log('Error resolved');
    }else{
        throw new Error('The value is low');
    }
}