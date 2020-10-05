function lastIndexOf(arr,n){
  const item=n<0?arr.length+n:n;
  return arr[item]
}
module.exports = lastIndexOf;