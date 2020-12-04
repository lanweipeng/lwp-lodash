var fs=require('fs');
//先创建data目录 目录文件操作存在权限问题
// fs.mkdirSyns('data')
//写入内容
const arr=['overArgs'];
arr.forEach(item=>{
  fs.writeFile(`${item}.js`,'',function(error){
    console.log(error);
    });
    fs.writeFile(`${item}.test.js`,'',function(error){
      console.log(error);
      });
      // fs.writeFile(`${item}By.js`,'',function(error){
      //   console.log(error);
      //   })
      //   fs.writeFile(`${item}By.test.js`,'',function(error){
      //     console.log(error);
      //     })
      //     fs.writeFile(`${item}With.js`,'',function(error){
      //       console.log(error);
      //       })
      //       fs.writeFile(`${item}With.test.js`,'',function(error){
      //         console.log(error);
      //         })
    
})
