//引入moment模块
const moment=require('moment');
const dt = moment().format('YYYY-MM-DD HH:mm:ss');
const dt1 = moment('1995-10-10').format('YYYY-MM-DD HH:mm:ss');
console.log(dt,dt1);