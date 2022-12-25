const { changeDependency } = require("../../util/changeDependency");
const { raedConFile } = require("../../util/configFile/ConfigFile");
const { copyProject } = require("../../util/decompress");
const { templateEngines } = require("./packges.json");
async function MVCInit(prompt,projectPath) {
  copyProject("MVC",projectPath,raedConFile(projectPath).lang);
  const questions = {
    type: "list",
    name: "viewChose",
    message: "chose view engine :",
    choices: ["none", ...Object.keys(templateEngines)],
  };
  let viewEngine = await prompt(questions);
  viewEngine = viewEngine.viewChose;
  console.clear();
  if (viewEngine != "none") {
    let chosedTE = {};
    chosedTE[`${viewEngine}`] = templateEngines[`${viewEngine}`];
    changeDependency(projectPath,chosedTE);
  }
  console.clear();
}
module.exports = {
  MVCInit,
};
