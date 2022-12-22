const fs = require("fs");
const path = require("path");

function changeDevDependency(packges) {
  let fileContent = fs.readFileSync("package.json");
  let jsonFile = JSON.parse(fileContent);
  jsonFile.devDependencies = Object.assign(packges,jsonFile.devDependencies);
  console.log(jsonFile);
  let data = JSON.stringify(jsonFile,null," ")
  console.log(data);
  fs.writeFileSync(
    "package.json",
    data,
    "utf8",
    function (err) {
      if (err) throw err;
      // if no error
      console.log("Data is appended to file successfully.");
    }
  );
}
module.exports = {
  changeDevDependency,
};
