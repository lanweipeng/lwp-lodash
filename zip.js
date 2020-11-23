function zip(...arrays) {
  console.log(arrays);
  
  const 
  // result = [],
    length = arrays.length
  let i = 0
  const intArr=Array(arrays.length);
  console.log(intArr)
  const result=Array(arrays[0].length).fill([])
  // .fill(intArr)
  console.log(result)
  // while (i < length - 1) {
  //   i++
  //   const array = arrays[i],
  //     length = array.length
  //   let j = 0;
  //   while (j < length - 1) {
  //     j++
  //     console.log(i,j)
  //     // result[i][j]=array[j]
  //   }
  // }
  for(let i=0;i<arrays.length;i++){
    const array=arrays[i];
    // console.log(i)
    for(let j=0;j<array.length;j++){
      console.log(arrays[i][j]);
      if(i===j)
      result[j].push(arrays[i][j])
      // result[j][i]=arrays[i][j]
    }
  }
  return result
}
console.log(zip(['a', 'b'], [1, 2], [true, false]))
module.exports = zip