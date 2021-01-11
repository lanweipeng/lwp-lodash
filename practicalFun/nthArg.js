const nth=require('../nth')
module.exports=function(n){
    return (...args)=>nth(args,n)
}