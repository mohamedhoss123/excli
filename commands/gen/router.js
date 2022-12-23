const fs = require("fs");
const path = require("path");
const { raedConFile } = require("../../util/configFile/ConfigFile");
const { writeContent } = require("../../util/gen/mdine");

async function generateRoute(name) {
  let FileName = name.split("/").pop();
  let routeContent = fs
    .readFileSync(
      path.join(__dirname, `../../templates/routers/route.js`)
    )
    .toString();
  routeContent = routeContent.replaceAll(
    "thisiplaceHolder",
    FileName
  );
  writeContent(name, routeContent, "routes","route");
}
module.exports = {
  generateRoute,
};
