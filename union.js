function union(arr1,arr2){
  const set=new Set([...arr1,...arr2]);
  return Array.from(set)
}
module.exports=union