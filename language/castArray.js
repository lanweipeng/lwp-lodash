module.exports=function(value){
    if(arguments.length===0){
        return []
    }
    return Object.prototype.toString.call(value)==='[object Array]'?value:[value]
}