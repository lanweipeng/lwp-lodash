// function overArgs(func,transforms){
//     return function(...args){
//         const result=[];
//         args.forEach((item,index)=>{
//             console.log()
//             result.push(transforms[index](item))
//         });
//         return result
//     }
// }
function overArgs(func,transforms){
    const funcsLength=transforms.length
    return function(...args){
        let index = -1
        const length=Math.min(args.length,funcsLength)
        while (++index<length){
            args[index]=transforms[index].call(this,args[index])
        }
        return func.apply(this,args)
    }
}
module.exports=overArgs