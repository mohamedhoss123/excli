const fs = require("fs-extra");
const path = require("path");

function changeDependency(projectPath,packges) {
  let jsonFile = fs.readJSONSync(path.join(projectPath,"package.json"));
  jsonFile.dependencies = Object.assign(packges, jsonFile.dependencies);
  fs.writeJSONSync(path.join(projectPath,"package.json"),  jsonFile,{spaces:1});
}
module.exports = {
  changeDependency,
};
