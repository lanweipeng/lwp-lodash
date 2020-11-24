// forEach([1, 2], function(value) {
//     console.log(value);
//   });
//   // => Logs `1` then `2`.
   
//   forEach({ 'a': 1, 'b': 2 }, function(value, key) {
//     console.log(key);
//   });
//   // => Logs 'a' then 'b' (iteration order is not guaranteed).
function forEach(object,fn){
    // console.log(object)
    if(Array.isArray(object)){
        object.forEach(item=>{
            fn(item)
        })
    }else{
        for(const key in object){
            fn(object[key],key)
        }
        // Object(object).keys.forEach(key=>{
        //     console.log(key)
        //     fn(object[key],key)
        // })
    }
}
module.exports=forEach