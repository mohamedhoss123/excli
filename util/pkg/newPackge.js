const chalk = require("chalk");
const { writeJsonSync, readJsonSync } = require("fs-extra");
const path = require("path");
const { GPD } = require("./getPkgDetails");

async function NP(prompt, ifDev) {
  let mode = ifDev ? "devDependencies" : "dependencies";
  const pkgName = await GPD(prompt);
  const questions = {
    type: "confirm",
    name: "name",
    message: "is this the packge you want? :",
  };
  let result = await prompt(questions);
  if (result.name) {
    let currentData = readJsonSync(path.join(__dirname,"../../commands/pkg/debs.json"))
    currentData[`${mode}`][pkgName['name']] = pkgName.version
    writeJsonSync(path.join(__dirname,"../../commands/pkg/debs.json"),currentData);
    console.log(chalk.green("PACKGE ADDED TO YOUR LIST !"));
  }
}
module.exports = {
  NP,
};
