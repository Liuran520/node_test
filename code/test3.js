const TIME=require('./dateFormate.js');
// 调用方法，进行时间的格式化
const dt = new Date();
console.log(dt);
var newDT=TIME.dateFormate(dt);
console.log(newDT);