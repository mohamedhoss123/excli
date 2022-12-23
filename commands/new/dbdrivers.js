const { changeDependency } = require("../../util/changeDependency");

const { databaseDrivers} = require("./packges.json")
async function dbdriverInit(prompt) {
    console.clear();
    const questions = {
      type: "checkbox",
      name: "database",
      message: "witch driver you want ?",
      choices: Object.keys(databaseDrivers),
    };
    let dbdriverChoise = await prompt(questions);
    dbdriverChoise = dbdriverChoise.database;
    let newPkg = Object.fromEntries(
      Object.entries(databaseDrivers).filter(([key]) =>dbdriverChoise.includes(key))
    );
    changeDependency(newPkg)
    console.clear();
  }
  module.exports = {
    dbdriverInit
  };
  