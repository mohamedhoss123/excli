const fs = require("fs-extra");
const path = require("path");

function raedConFile(projectPath) {
  let data;
  try {
    data = fs.readJsonSync(path.join(projectPath, "excli.json"));
  } catch (error) {
    return error;
  }
  return data;
}
function updateConFile(projectPath,newData = {}) {
  let currentFile = raedConFile(projectPath);
  fs.writeJsonSync(
    path.join(projectPath, "excli.json"),
    Object.assign(currentFile, newData),
    { spaces: 1 }
  );
}
module.exports = {
  updateConFile,
  raedConFile,
};
