function interatee(fn,args){

}
function over(array){
    return function(...args){
        return array.map(fn=>{
            return fn(...args)
        })
    }
}
module.exports=over