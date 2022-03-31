let date=new Date()
console.log(date);
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

date=new Date("October 13, 2014 11:13:00");
console.log(date);

date=new Date(2022,3);
console.log(date);

date=new Date(2022,3,23)
console.log(date);

date=new Date(2021,3,23,15,20);
console.log(date);

date=new Date(2309174522)
console.log(date);
date=new Date(-2309174522)
console.log(date);