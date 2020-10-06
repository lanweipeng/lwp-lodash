function takeRight(arr,n=1){
  arr=arr.reverse();
  return arr.splice(0,n).reverse()
}
module.exports=takeRight