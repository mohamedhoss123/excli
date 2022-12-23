const fs = require("fs");
const path = require("path");
function createConFile(dataObj) {
  let jsonData = JSON.stringify(dataObj, null, " ");
  fs.writeFileSync(path.join(process.cwd(),"excli.json"),jsonData)
}
function raedConFile(){
  let data 
    try {
      data = JSON.parse(fs.readFileSync(path.join(process.cwd(),"excli.json")))
    } catch (error) {
      return (error)
    }
  return data
}
module.exports = {
  createConFile,
    raedConFile
};

