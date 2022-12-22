const fs = require("fs");
const path = require("path");

function changePjName(name) {
  let fileContent = fs.readFileSync("package.json");
  let jsonFile = JSON.parse(fileContent);
  jsonFile.name = name;
  console.log(jsonFile);
  let data = JSON.stringify(jsonFile)
  console.log(data);
  fs.writeFileSync(
    "package.json",
    data,
    "utf8",
    // callback function
    function (err) {
      if (err) throw err;
      // if no error
      console.log("Data is appended to file successfully.");
    }
  );
}
module.exports = {
  changePjName,
};
