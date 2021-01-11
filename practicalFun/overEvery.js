function overEvery(predicates){
    return function(value){
        return predicates.every(item=>item(value))
    }
}
module.exports=overEvery