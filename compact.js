function compact(arr){
  if(!Array.isArray(arr)){
    throw 'arr must be arrary'
  }
return arr.filter(item=>!!item)
}
module.exports = compact