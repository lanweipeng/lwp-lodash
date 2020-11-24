function bind(fn,target,c,d){
    console.log(fn,target,c,d)
    return function(){}
}
var greet = function(greeting, punctuation) {
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