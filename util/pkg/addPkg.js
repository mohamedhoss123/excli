const path = require("path");
const fs = require("fs-extra");
const { changeDependency } = require("../changeDependency");
const { changeDevDependency } = require("../changeDevDep");
async function APKG(prompt, ifDev) {
  let mode = ifDev ? "devDependencies" : "dependencies";
  let dependencies = fs.readJsonSync(
    path.join(__dirname, "../../commands/pkg/debs.json")
  )[mode];
  let packges = Object.keys(dependencies);
  const questions = {
    type: "checkbox",
    name: "name",
    message: "what is packge name? :",
    choices: packges,
  };
  let result = await prompt(questions);
  let datTiWrute = {};
  result.name.map((ele) => {
    if (packges.includes(ele)) {
      let value = dependencies[`${ele}`];
      datTiWrute[`${ele}`] = value
    }
  });
  if(!ifDev){
    changeDependency(process.cwd(),datTiWrute)
    return
  }
  changeDevDependency(process.cwd(),datTiWrute)
}
module.exports = {
  APKG,
};
