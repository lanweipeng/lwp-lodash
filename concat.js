function concat(arr,...res){
  const newArr=[...arr];
  for(let i=0;i<res.length;i++){
    if(Array.isArray(res[i])){
      newArr.push(...res[i])
    }else{
      newArr.push(res[i])
    }
    
  }
  return newArr
}
module.exports = concat