const getTag = require("../getTag")

function isArguments(value){

    return getTag(value)==='[object Arguments]'
}
module.exports=isArguments