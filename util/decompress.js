var fs = require("fs-extra");
const path = require("path");
function copyProject(name = "test", projectPath,lang) {
  try {
      fs.copySync(
      path.join(__dirname, `../templates/projects/${name}.${lang}`),
      projectPath
    );
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  copyProject,
};
