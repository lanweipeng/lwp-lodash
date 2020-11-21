const baseXor = (...arr) => {
  let index = -1
  const length = arr.length,res=[]
  while (++index < length) {
    let otherIndex = -1
    while (++otherIndex < length) {
      if(index!=otherIndex){
        res.push(difference(arr[index],arr[otherIndex]))
      }
    }
  }
  return res.flat();
}
function difference(arr,other){
  const res=[]
  arr.forEach(element => {
    if(!other.includes(element)){
      res.push(element)
    }
  });
  return res;
}
module.exports=baseXor