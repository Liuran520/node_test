function dateFormate(dateStr){
    const dt = new Date(dateStr);
    const y=dt.getFullYear();
    const m=buling(dt.getMonth()+1);
    const d=buling(dt.getDate());
    const hh=buling(dt.getHours());
    const mm=buling(dt.getMinutes());
    const ss=buling(dt.getSeconds());
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function buling(n){
    return n > 9 ? n : '0' + n
}
module.exports = {
    dateFormate
  }