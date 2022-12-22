const fs = require("fs");
const path = require("path");

function changeDependency(packges) {
  console.log("here manga");
  let fileContent = fs.readFileSync("package.json");
  let jsonFile = JSON.parse(fileContent);
  jsonFile.dependencies = Object.assign(packges,jsonFile.dependencies);
  let data = JSON.stringify(jsonFile,null," ")
  fs.writeFileSync(
    "package.json",
    data,
    "utf8",
    function (err) {
      if (err) throw err;
      // if no error
    }
  );
}
module.exports = {
  changeDependency,
};
