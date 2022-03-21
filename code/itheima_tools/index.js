const date=require('./src/dateFormate');
const escape=require('./src/htmlEscape');
module.exports = {
    ...date,
    ...escape
  }
// console.log(module);