function flatten(arr){
  const res=[]
  for(let i=0;i<arr.length;i++){
    const item=arr[i]
    if(Array.isArray(item)){
      res.push(...item) 
    }else{
      res.push(item)
    }
  }
  return res;
}
module.exports = flatten