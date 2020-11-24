const forEach =require('../forEach');
function after(n,fn){
  if(typeof fn!=='function'){
    throw new Error('Expected a function')
  }
  n=n||0;
  return function(...args){
    console.log(n)
    if(--n<1){
      fn.applay(this,args)
    }
  }
}
var saves = ['profile', 'settings'];
 
var done = after(saves.length, function() {
  console.log('done saving!');
});
 
forEach(saves, function(type) {
  console.log({ 'type': type, 'complete': done });
});
// => Logs 'done saving!' after the two async saves have completed.
module.exports=after