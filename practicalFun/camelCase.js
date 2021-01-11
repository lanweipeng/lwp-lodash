const { upperFirst } = require("lodash")

const camelCase=(array)=>(
    array.reduce((result,word,index)=>{
        word=word.toLowerCase()
        return result+(index?upperFirst(word):word)
    })
)
module.exports=camelCase