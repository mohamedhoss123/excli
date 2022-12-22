const fs = require("fs");
const path = require("path");

function changeDevDependency(packges) {
  let fileContent = fs.readFileSync("package.json");
  let jsonFile = JSON.parse(fileContent);
  jsonFile.devDependencies = Object.assign(packges,jsonFile.devDependencies);
  let data = JSON.stringify(jsonFile,null," ")
  fs.writeFileSync(
    "package.json",
    data,
    "utf8",
    function (err) {
      if (err) throw err;
      }
  );
}
module.exports = {
  changeDevDependency,
};
