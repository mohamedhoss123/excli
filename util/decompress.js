var fs = require("fs");
var decompress = require("decompress");
const path = require("path")
async function unzip(name="test") {

  try {
    const files = await decompress(
      path.join(__dirname,`../templates/zip/${name}.zip`),
      process.cwd()
    );
  } catch (e) {
    console.log(e);
  }
}
module.exports = {
  unzip,
};
