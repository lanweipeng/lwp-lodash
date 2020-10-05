
function chunk(arr,number=1){   
  const res=[];
  if(typeof number !=='number'){
    throw 'size must be a number'
  }
  for(let i=0;i<arr.length;i+=number)   {
    res.push(arr.slice(i,i+number));
  }
  return res;
}
module.exports= chunk