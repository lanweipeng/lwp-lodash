function dropRight(arr,number=1){
  const length=arr==null?0:arr.length,
  n=length-number;
  return length?arr.slice(0,n<0?0:n):[]
}
module.exports = dropRight