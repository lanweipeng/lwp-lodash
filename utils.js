const arrayProto=Array.prototype,
slice=arrayProto.slice
function dealInteratee(interatee,value){
    return typeof interatee==='function'?interatee(value):value[interatee]
  }
  function doubled(n){
    return n*2
}
function square(n){
    return n*n
}
function noop(){}
  module.exports={
    dealInteratee,
    doubled,
    square,
    noop,
    slice
  }