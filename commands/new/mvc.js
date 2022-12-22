const { changeDependency } = require("../../util/changeDependency");
const { unzip } = require("../../util/decompress");
const {templateEngines} = require("./packges.json");
async function MVCInit(prompt) {
  await unzip("MVC");
  const questions = {
    type: "list",
    name: "viewChose",
    message: "chose view engine :",
    choices: ["ejs","pug"],
  };
  let viewEngine = await prompt(questions);
  viewEngine = viewEngine.viewChose;
  console.clear();
  let tm = {}
  tm[`${viewEngine}`] = templateEngines[`${viewEngine}`]
  changeDependency(tm);
  console.clear();
}
module.exports = {
  MVCInit,
};
