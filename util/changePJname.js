const fs = require("fs");
const path = require("path");
/**
 * @param name the name of the project.
 * 
 * this function is resposibale to change name in packge.json file
 */
function changePjName(name) {
  let fileContent = fs.readFileSync("package.json");
  let jsonFile = JSON.parse(fileContent);
  jsonFile.name = name;
  console.log(jsonFile);
  let data = JSON.stringify(jsonFile,null," ")
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
