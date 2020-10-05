function lastIndexOf(arr,n){
  let flag=0;
 for(let i=0;i<arr.length;i++){
   if(arr[i]===n){
     flag=i
   }
 }
  return flag;
}
module.exports = lastIndexOf;