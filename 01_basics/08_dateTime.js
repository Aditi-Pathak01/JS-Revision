//(1)Todays Date
let myDate = new Date();
console.log(myDate);
console.log(typeof myDate); //object// IQ
//(2)date methods (5)
console.log(myDate.toString());
console.log(myDate.toDateString()); //best
console.log(myDate.toLocaleString()); //adding time (hr,min)../gives current or we added!
console.log(myDate.toJSON());
//(3)
console.log(myDate.getDay()); // 0 sunday
console.log(myDate.getMonth()); // 10-nov (js month starts from 0)
console.log(myDate.getMonth() + 1); // 11-nov (js month starts from 0)



//(3)How to create Specific Date ?(2)
//way1
let myCreatedDate = new Date(2024, 10, 24);
console.log(myCreatedDate); //00-jan in js // 2024 nov 24
//way2
let myCreatedDate2 = new Date("11-24-2024");
console.log(myCreatedDate2); // 11-nov
//(4)How to add our time in date ?
let myCreatedDate3 = new Date(2024, 10, 24, 5, 5);
console.log(myCreatedDate3.toLocaleString()); // date and 5:05 am

/**TIME */
//(1)
//way-1 how to get currentTime
let currentTime = Date.now();
console.log(currentTime); //in ms
//way-2  how to get Time from created Date
console.log(myCreatedDate3.getTime()); // in ms
//way-3 .toLocalString():- adding our time
//(2)converting ms to sec
console.log(Math.floor(Date.now() / 1000));

//some methods
const myDate2 = myDate.toLocaleString("default",{
  weekday : "long"
})

console.log(myDate2)