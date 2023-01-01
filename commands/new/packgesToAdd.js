const { changeDependency } = require("../../util/changeDependency");
const { changeDevDependency } = require("../../util/changeDevDep");
const {devPakgesDetails,pakgesDetails} = require("./packges.json")

async function optinalPackges(projectPath,prompt) {
  const questions = {
    type: "checkbox",
    name: "Chose",
    message: "want to add some pakages ? :",
    choices: Object.keys(pakgesDetails)
  };
  let packges = await prompt(questions);
  console.clear();
  let newPkg = Object.fromEntries(
    Object.entries(pakgesDetails).filter(([key]) => packges.Chose.includes(key))
  );
  changeDependency(projectPath,newPkg);
}
async function optinalDevPackges(projectPath,prompt) {
  const questions = {
    type: "checkbox",
    name: "Chose",
    message: "want to add some devPakages ? :",
    choices: Object.keys(devPakgesDetails),
    default:['nodemon']
  };
  let packges = await prompt(questions);
  if (packges.Chose.length != 0) {
    let newPkg = Object.fromEntries(
      Object.entries(devPakgesDetails).filter(([key]) =>
        packges.Chose.includes(key)
      )
    );
    changeDevDependency(projectPath,newPkg);
  }else{
    return
  }
}
module.exports = {
  optinalPackges,
  optinalDevPackges
};
