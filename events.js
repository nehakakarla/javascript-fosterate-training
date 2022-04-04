function hiThere(){
    console.log('Hi there!');
}

let a=0;
let b=0;
let c=0;
function changeBackground(){
    let x=document.getElementById('bg');
    x.style.backgroundColor='rgb('+a+', '+b+', '+c+')';
    a+=1;
    b+=a+1;
    c+=b+1;
    if (a>255) a=a-b;
    if (b>255) b=a;
    if (c>255) c=b;
}

function hov(){
    let e=document.getElementById('hover');
    e.style.display='none';
}

function out(){
    let e=document.getElementById('out');
    e.style.display='none';
}

function focused(){
    let e=document.getElementById('inp');
    if (confirm('Got it?')) {
      e.blur();
    }
  }