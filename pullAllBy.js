const basepull =require('./_basepull')
function pullAllBy(arr1,arr2,by){
  
  const newArr1=arr1.map(item=>item[by]);
  const newArr2=arr2.map(item=>item[by]);
console.log(newArr1,newArr2)
  const res= basepull(newArr1,newArr2);
  return res.map(item=>{
    const obj={};
    obj[by]=item;
    return obj;
  })
}
module.exports = pullAllBy;