function difference(arr1,arr2){
 return arr1.filter(item1=>{
   let res=true;
    arr2.forEach(item2 => {
     if(item1===item2){
       res=false;
     }
   });
   return res;
 })
}
module.exports = difference