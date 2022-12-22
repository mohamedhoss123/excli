async function MVCInit(prompt){
    const questions = {
        type:"list",
        name:"viewChose",
        message:"chose view engine :",
        choices:["ejs","pug","hbs"]
    }
    let viewEngine = await prompt(questions).viewChose
}
module.exports = {
    MVCInit
};
