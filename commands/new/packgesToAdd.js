const { changeDependency } = require("../../util/changeDependency");

const pakgesDetails = {
    "express-session":"^1.17.3",
    "body-parser":"^1.20.1"
}
async function optinalPackges(prompt){
    const questions = {
        type:"checkbox",
        name:"Chose",
        message:"want to add some pakages ? :",
        choices:["express-session","body-parser"]
    }
    let packges = await prompt(questions)
    let newPkg = Object.fromEntries(Object.entries(pakgesDetails).filter(([key]) => packges.Chose.includes(key)));
    changeDependency(newPkg)
}
module.exports = {
    optinalPackges
};
