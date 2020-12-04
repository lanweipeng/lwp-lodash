const before = require('./before')
function once(fn){
    return before(2,fn)
}
module.exports = once;
