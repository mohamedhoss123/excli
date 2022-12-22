const { changeDependency } = require("../../util/changeDependency");
const { changeDevDependency } = require("../../util/changeDevDep");

const pakgesDetails = {
  "express-session": "^1.17.3",
  "body-parser": "^1.20.1",
};
const devPakgesDetails = {
  nodemon: "^2.0.20",
};
async function optinalPackges(prompt) {
  const questions = {
    type: "checkbox",
    name: "Chose",
    message: "want to add some pakages ? :",
    choices: ["express-session", "body-parser"],
  };
  let packges = await prompt(questions);
  let newPkg = Object.fromEntries(
    Object.entries(pakgesDetails).filter(([key]) => packges.Chose.includes(key))
  );
  changeDependency(newPkg);
}
async function optinalDevPackges(prompt) {
  const questions = {
    type: "checkbox",
    name: "Chose",
    message: "want to add some devPakages ? :",
    choices: ["nodemon"],
  };
  let packges = await prompt(questions);
  if (packges.Chose.length != 0) {
    let newPkg = Object.fromEntries(
      Object.entries(devPakgesDetails).filter(([key]) =>
        packges.Chose.includes(key)
      )
    );
    changeDevDependency(newPkg);
  }else{
    return
  }
}
module.exports = {
  optinalPackges,
  optinalDevPackges
};
