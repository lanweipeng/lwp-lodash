const baseXor=require('./.internal/_baseXor');
const isArrayLikeObject = require('./isArrayLikeObject');
const xor=(...arr)=>{
  return baseXor(arr.filter(isArrayLikeObject))
}
module.exports = xor