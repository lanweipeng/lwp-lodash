function basePull(arr,arg){
  const str=arg.join('');
 return arr.filter(item=>{
   if(str.indexOf(item)!==-1){
     return false
   }else{
     return true
   }
 })
}
module.exports=basePull