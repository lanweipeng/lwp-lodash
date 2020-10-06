function changeReal(real,toBe){
  while(real.length){
    real.pop();
  }
  toBe.forEach((element,index) => {
    real[index]=element
  });
}
module.exports=changeReal;