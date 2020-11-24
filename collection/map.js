function map(array,fn){
    const res=[]
    for(let i=0;i<array.length;i++){
        res.push(fn(array[i]))
    }
    return res;
}

console.log(map([1,2,3],item=>item+1));
module.exports=map