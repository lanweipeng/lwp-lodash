const pullAllByWith = require('./pullAllByWith');
function isEqual(arr1,arr2){
  let res=true;
  if(arr1.length!==arr2.length){
    res=false;
  }
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i])
    }
  }

}
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
console.log(pullAllByWith(array,[{ 'x': 1 }, { 'x': 3 }], 'x'))