function changeReal(real,toBe){
  while(real.length){
    real.pop();
  }
  toBe.forEach((element,index) => {
    real[index]=element
  });
}
function pullAt(arr1,arr2){
const res=arr1.filter((item,index)=>arr2.indexOf(index)!==-1);
const arr=arr1.filter((item,index)=>arr2.indexOf(index)===-1);
changeReal(arr1,arr);
return res;
}
module.exports = pullAt;