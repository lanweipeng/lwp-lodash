function dealInteratee(interatee,value){
    return typeof interatee==='function'?interatee(value):value[interatee]
  }
  module.exports={
    dealInteratee
  }