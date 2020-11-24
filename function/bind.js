function bind(fn,target,c,d){
    console.log(fn,target,c,d,fn(c,'y'));
    return function(tail){
console.log(tail)
    }
}
var greet = function(greeting, punctuation) {
    console.log(this)
    return greeting + ' ' + this.user + punctuation;
  };
   
  var object = { 'user': 'fred' };
   
  var bound = bind(greet, object, 'hi');
  bound('!');
  // => 'hi fred!'
   
  // Bound with placeholders.
//   var bound = bind(greet, object, _, '!');
//   bound('hi');
//   // => 'hi fred!'