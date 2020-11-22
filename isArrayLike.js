const isLength = require("./isLength")

module.exports=(value)=>{
  return value!=null&&typeof value!=='function'&&isLength(value.length)
}