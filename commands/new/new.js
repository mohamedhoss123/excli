const { changePjName } = require("../../util/changePJname");
const inquirer = require('inquirer');
const { MVCInit } = require("./mvc");
const { optinalPackges,optinalDevPackges } = require("./packgesToAdd");
const { createFile } = require("../../util/configFile/createConfigFile");
const prompt = inquirer.createPromptModule();
let newTemplate = {
    "MVC":MVCInit,
    "Rest":() => {console.log("comming soon");process.exit(0)}
}
let dataForConfigFile = {}
async function newGen(str){
    console.clear();
    const questions = {
        type:"list",
        name:"choseTemplate",
        message:"chose new application type :",
        choices:["MVC","Rest"]
    }
    const data = await prompt(questions)
    console.clear();
    await newTemplate[data.choseTemplate](prompt)
    dataForConfigFile.template = data.choseTemplate
    changePjName(str)
    await optinalPackges(prompt)
    await optinalDevPackges(prompt)
    // createFile(dataForConfigFile)
    console.log("run the following commands :\n");
    console.log("npm install");
    console.log("npm start");
}


module.exports = {
    newGen
};
