const baseFlatten =require('./.internal/baseFlatten')
function flattenDepth(arr,depth=1){
  return baseFlatten(arr,depth);
}
module.exports = flattenDepth