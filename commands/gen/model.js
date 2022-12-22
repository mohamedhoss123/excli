const fs = require("fs");
const path = require("path");
const { writeContent } = require("../../util/gen/mdine");

async function generateModel(name) {
    console.log("used");
  let FileName = name.split("/").pop();
  let ModelContent = fs
    .readFileSync(
      path.join(__dirname, "../../templates/models/typeorm.js")
    )
    .toString();
  ModelContent = ModelContent.replaceAll(
    "thisiplaceHolder",
    FileName
  );
  writeContent(name, ModelContent, "models","model");
}
module.exports = {
  generateModel,
};
