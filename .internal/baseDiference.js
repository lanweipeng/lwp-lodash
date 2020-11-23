const {dealInteratee}=require('../utils')
function baseDifference(arr,other,interatee){
  if(interatee){
    other=other.map(item=>dealInteratee(interatee,item));

  }
  const res=[]
  arr.forEach(element => {
    const ne=interatee?dealInteratee(interatee,element):element;
    if(!other.includes(ne)){
      res.push(element)
    }
  });
  return res; 
}
module.exports=baseDifference