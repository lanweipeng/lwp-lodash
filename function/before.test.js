const before=require('./before');
function sayHi(n){
    console.log('hi');
    return n
}
const initialize=before(5,sayHi);


console.log(initialize())
initialize(1);
initialize(2);
initialize(3);
initialize(4);
initialize();
initialize();
console.log(initialize())