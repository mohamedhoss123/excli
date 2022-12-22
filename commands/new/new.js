const { unzip } = require("../../test");
const { changePjName } = require("../../util/changePJname");
const inquirer = require('inquirer');
const { MVCInit } = require("./mvc");
const { optinalPackges } = require("./packgesToAdd");
const prompt = inquirer.createPromptModule();


async function newGen(str){
    const questions = {
        type:"list",
        name:"choseProject",
        message:"chose new application type :",
        choices:["MVC","Rest"]
    }
    const data = await prompt(questions)
    await unzip()
    changePjName(str)
    await optinalPackges(prompt)
    // if(data.choseProject == "MVC"){
    //     MVCInit(prompt)
    // }
    
    // changePjName(str);
}


module.exports = {
    newGen
};
