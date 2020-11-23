// _.countBy([6.1, 4.2, 6.3], Math.floor);
// // => { '4': 1, '6': 2 }
 
// // The `_.property` iteratee shorthand.
// _.countBy(['one', 'two', 'three'], 'length');
// // => { '3': 2, '5': 1 }
const {dealInteratee} =require('./utils')
function countBy(array,interatee){
    const object={};
    array=array.map(item=>dealInteratee(interatee,item));
    array.forEach(item=>{
        if(!object[item]){
            object[item]=1
        }else{
            object[item]++
        }
    })
    return object
}
module.exports=countBy