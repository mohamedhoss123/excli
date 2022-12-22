const { changeDependency } = require("../../util/changeDependency");
const { unzip } = require("../../util/decompress");
const {templateEngines} = require("./packges.json");
async function MVCInit(prompt) {
  console.log("mvc");
  await unzip("MVC");
  const questions = {
    type: "list",
    name: "viewChose",
    message: "chose view engine :",
    choices: ["ejs", "pug"],
  };
  let viewEngine = await prompt(questions);
  viewEngine = viewEngine.viewChose;
  console.log();
  let tm = {}
  tm[`${viewEngine}`] = templateEngines[`${viewEngine}`]
  console.log(tm);
  changeDependency(tm);
  // console.clear();
  console.log("test");
}
module.exports = {
  MVCInit,
};
