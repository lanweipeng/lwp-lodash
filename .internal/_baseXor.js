const baseDiference = require("./baseDiference")

const baseXor = (arr,interatee) => {
 
  let index = -1
  const length = arr.length,res=[]
  while (++index < length) {
    let otherIndex = -1
    while (++otherIndex < length) {
      if(index!=otherIndex){
        res.push(baseDiference(arr[index],arr[otherIndex],interatee))
      }
    }
  }
  return res.flat();
}

module.exports=baseXor