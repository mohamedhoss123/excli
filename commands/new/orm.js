const { changeDependency } = require("../../util/changeDependency");
const {orm} = require("./packges.json")
async function ormInit(prompt) {
  console.clear();
  const questions = {
    type: "list",
    name: "dbdriver",
    message: "witch orm you want ?",
    choices: Object.keys(orm),
  };
  let ormChosed = await prompt(questions);
  ormChosed = ormChosed.dbdriver;
  let newPkg = Object.fromEntries(
    Object.entries(orm).filter(([key]) =>ormChosed.includes(key))
  );
  changeDependency(newPkg)
  console.log(ormChosed);
  return ormChosed;
}
module.exports = {
  ormInit
};

