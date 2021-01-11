function times(n,iteratee){
    const res=[];
    for(let i=0;i<n;i++){
        res.push(iteratee(i))
    }
    return res
}
module.exports=times