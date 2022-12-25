const fs = require("fs");
const path = require("path");
const { raedConFile } = require("../../util/configFile/ConfigFile");
const { writeContent } = require("../../util/gen/mdine");
async function generateController(name) {
  let FileName = name.split("/").pop();
  let controllerContent = fs
    .readFileSync(
      path.join(__dirname, `../../templates/controllers/controller.${raedConFile(process.cwd()).lang}`)
    )
    .toString();
  controllerContent = controllerContent.replaceAll(
    "thisisplaceholder",
    FileName + "Controller"
  );
  writeContent(name, controllerContent, "controllers","controller");
}

module.exports = {
  generateController,
};
