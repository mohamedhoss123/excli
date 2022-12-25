const { changeDependency } = require("../../util/changeDependency");
const {orm} = require("./packges.json")
async function ormInit(projectPath,prompt) {
  console.clear();
  const questions = {
    type: "list",
    name: "dbdriver",
    message: "witch orm you want ?",
    choices: ["none",...Object.keys(orm)],
  };
  let ormChosed = await prompt(questions);
  ormChosed = ormChosed.dbdriver;
  if(ormChosed != "none"){
    let newPkg = Object.fromEntries(
      Object.entries(orm).filter(([key]) =>ormChosed.includes(key))
    );
    changeDependency(projectPath,newPkg)
  }
  return ormChosed;
}
module.exports = {
  ormInit
};

