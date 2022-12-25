const fs = require("fs");
const path = require("path");
const { raedConFile } = require("../../util/configFile/ConfigFile");
const { writeContent } = require("../../util/gen/mdine");

async function generateModel(name) {
  let FileName = name.split("/").pop();
  let ModelContent = fs
    .readFileSync(
      path.join(__dirname, `../../templates/models/${raedConFile(process.cwd()).orm||"none"}.${raedConFile(process.cwd()).lang}`)
    )
    .toString();
  ModelContent = ModelContent.replaceAll(
    "thisiplaceHolder",
    FileName
  );
  letModelName = ""
  if(raedConFile(process.cwd()).orm == "typeorm"){
    letModelName = "entity"
  }else{
    letModelName= "model"
  }
  writeContent(name, ModelContent, "models",letModelName);
}
module.exports = {
  generateModel,
};
