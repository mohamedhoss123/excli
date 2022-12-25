const fs = require("fs-extra");
const path = require("path");
/**
 * @param name the name of the project.
 * 
 * this function is resposibale to change name in packge.json file
 */
function changePjName(projectPath,name) {
  let jsonFile = fs.readJSONSync(path.join(projectPath,"package.json"));
  jsonFile.name = name;
  fs.writeJSONSync(path.join(projectPath,"package.json"),  jsonFile,{spaces:1});
  
}
module.exports = {
  changePjName,
};
