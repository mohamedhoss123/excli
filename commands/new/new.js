const { changePjName } = require("../../util/changePJname");
const inquirer = require('inquirer');
const fs = require("fs-extra")
const path = require("path")
const { MVCInit } = require("./mvc");
const { optinalPackges,optinalDevPackges } = require("./packgesToAdd");
// const { createConFile, updateConFile } = require("../../util/configFile/ConfigFile");
const { ormInit } = require("./orm");
const { dbdriverInit } = require("./dbdrivers");
const { LangInit } = require("./lang");
const chalk = require("chalk");
const { updateConFile } = require("../../util/configFile/ConfigFile");

const prompt = inquirer.createPromptModule();
let newTemplate = {
    "MVC":MVCInit,
    "Rest":() => {console.log("comming soon");process.exit(0)}
}
let dataForConfigFile = {}
async function newGen(str){
    let projectPath = path.join(process.cwd(),str)
    fs.mkdirSync(projectPath)
    fs.writeJSONSync(path.join(projectPath,"excli.json"),{})
    console.clear();
    await LangInit(projectPath,prompt)

    console.clear();
    const questions = {
        type:"list",
        name:"choseTemplate",
        message:"chose new application type :",
        choices:["MVC","Rest"]
    }
    const data = await prompt(questions)
    console.clear();
    await newTemplate[data.choseTemplate](prompt,projectPath)
    dataForConfigFile.template = data.choseTemplate
    changePjName(projectPath,str)
    // packges section 
    await optinalPackges(projectPath,prompt)
    await optinalDevPackges(projectPath,prompt)
    // end packges 
    let orm = await ormInit(projectPath,prompt)
    dataForConfigFile.orm = orm
    await dbdriverInit(projectPath,prompt)
    
    updateConFile(projectPath,dataForConfigFile)
    console.log(chalk.green("PRIJECT CREATED !"));
    console.log("don't forget to install your dependencies");
}


module.exports = {
    newGen
};
