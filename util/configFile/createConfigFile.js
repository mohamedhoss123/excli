const fs = require("fs");
const path = require("path");
function createFile(dataObj) {
  let jsonData = JSON.stringify(dataObj, null, " ");
  fs.readFileSync(path.join(process.cwd,"excli.json"))
}
module.exports = {
    createFile
};

