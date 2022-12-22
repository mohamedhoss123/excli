var fs = require("fs");
var decompress = require("decompress");
const path = require("path")
async function unzip(templateName = "test") {
  try {
    const files = await decompress(
      path.join(__dirname,`templates/${templateName}.zip`),
      process.cwd()
    );
    console.log("done");
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  unzip,
};
