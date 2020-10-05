function fill(arr,value,start=0,end){
  if(!end){
    end=arr.length;
  }
  while(start<end){
    arr[start++]=value
  }
  return arr;
}
module.exports = fill