function intersection(arr1, arr2) {
  const res = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        res.push(arr1[i])
      }
    }
  }
  return res
}
module.exports = intersection