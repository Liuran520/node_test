const itheima=require('./itheima_tools/index');
// 格式化时间的功能
const dtStr = itheima.dateFormate(new Date())
console.log(dtStr)
console.log('-----------')
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = itheima.htmlEscape(htmlStr)
console.log(str)
console.log('-----------')

const str2 = itheima.htmlUnEscape(str)
console.log(str2)