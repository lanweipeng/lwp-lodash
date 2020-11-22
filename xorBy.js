const baseXor=require('./.internal/_baseXor');
const isArrayLikeObject = require('./isArrayLikeObject');
const last=(arr)=>{
  return arr[arr.length-1]
}
const xorBy=(...arr)=>{
  let interatee=last(arr)
  return baseXor(arr.filter(isArrayLikeObject),interatee)
}
module.exports = xorBy