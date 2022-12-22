const fs = require('fs');
const path = require('path');
function setViewEngine(name){
    let data = fs.readFileSync(path.join(process.cwd(),"main.js"))
    console.log(data);
}
module.exports = {
    setViewEngine
};
