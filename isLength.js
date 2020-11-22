const MAX_SAFE_INTERGER=9007199254740991
module.exports=(value)=>{
  return typeof value==='number'&&value>-1&&value%1==0&&value<MAX_SAFE_INTERGER
}