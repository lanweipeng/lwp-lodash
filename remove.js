const changeReal=require('./_changeReal')
function remove(arr,fn){
const res=arr.filter((item,index)=>fn(item,index));
const arr1=arr.filter((item,index)=>!fn(item,index));
changeReal(arr,arr1);
return res;
}
module.exports = remove;