const chalk = require("chalk");
const { updateConFile } = require("../../util/configFile/ConfigFile");

updateConFile;
let extenTions = {
  javascript:"js",
  typescript:"ts"
}
async function LangInit(projectPath,prompt) {
  const questions = {
    type: "list",
    name: "langChoise",
    message: "chose view engine :",
    choices: ["javascript", "typescript"],
  };
  let lang = await prompt(questions);
  lang = lang.langChoise;
  updateConFile(projectPath,{lang:extenTions[lang]});


}
module.exports = {
  LangInit,
};
