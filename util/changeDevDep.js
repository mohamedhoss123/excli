const fs = require("fs-extra");
const path = require("path");

function changeDevDependency(projectPath,packges) {
  let jsonFile = fs.readJSONSync(path.join(projectPath,"package.json"));
  jsonFile.devDependencies = Object.assign(packges, jsonFile.devDependencies);
  fs.writeJSONSync(path.join(projectPath,"package.json"),  jsonFile,{spaces:1});
}
module.exports = {
  changeDevDependency,
};
