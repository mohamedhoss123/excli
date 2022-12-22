const fs = require("fs");
const path = require("path");
const { writeContent } = require("../../util/gen/mdine");
async function generatemiddleware(name) {
  let FileName = name.split("/").pop();
  let middlewareContent = fs
    .readFileSync(
      path.join(__dirname, "../../templates/middlewares/middleware.js")
    )
    .toString();
  middlewareContent = middlewareContent.replaceAll(
    "thisisplaceholder",
    FileName + "Middleware"
  );
  writeContent(name, middlewareContent, "middlewares","middleware");
}
module.exports = {
  generatemiddleware,
};
