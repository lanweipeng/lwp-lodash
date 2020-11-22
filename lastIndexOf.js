function lastIndexOf(array,value,fromIndex){
  if(!fromIndex){
    fromIndex=array.length-1
  }
  let flag;
 for(let i=fromIndex;i>=0;i--){
   if(array[i]===value){
     flag=i;
     break;
   }
 }
  return flag;
}
module.exports = lastIndexOf;