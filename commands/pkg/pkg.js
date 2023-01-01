const inquirer = require('inquirer');
const { APKG } = require('../../util/pkg/addPkg');
const { NP } = require('../../util/pkg/newPackge');
const prompt = inquirer.createPromptModule();
let actions = {
    "add packge to current project":APKG,
    "new packge to your list":NP,
    // "remove packge from your list":
}
async function pkg(str){
    const questions = {
        type:"list",
        name:"action",
        message:"what do you want ? :",
        choices:Object.keys(actions)
    }
    console.clear();
    let result = await prompt(questions)
    await actions[result.action](prompt,str.D)
    // if(str.D == true){
    //     return console.log("this is devDeb");
    // }
    // console.log("this is deb");
}


module.exports = {
    pkg
};
