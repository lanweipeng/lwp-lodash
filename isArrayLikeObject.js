const isArrayLike = require("./isArrayLike")
const isObject = require("./isObject")

module.exports=(value)=>{
  return isArrayLike(value)&&isObject(value)
}