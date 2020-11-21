
function baseFlatten(arr,depth){   
  const res=[];
  if(depth>1){
    if(Array.isArray(item)){
      res.push(...flatten(item,depth-1)) 
    }else{
      res.push(item)
    }
    
  }else{
    return arr
  }
  return res;
}
module.exports= baseFlatten