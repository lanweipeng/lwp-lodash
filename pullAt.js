const changeReal=require('./_changeReal')
function pullAt(arr1,arr2){
const res=arr1.filter((item,index)=>arr2.indexOf(index)!==-1);
const arr=arr1.filter((item,index)=>arr2.indexOf(index)===-1);
changeReal(arr1,arr);
return res;
}
module.exports = pullAt;