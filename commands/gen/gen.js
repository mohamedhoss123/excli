const { generateController } = require("./controller");
const { generatemiddleware } = require("./middleware");

let ActionsToTake = {
    "c":generateController,
    "mi":generatemiddleware
} 
async function genInit(type,fileName){
    if(ActionsToTake[type]!= undefined){
        ActionsToTake[type](fileName)
    }else{
        return console.log(`type "${type}" is not valide`);
    }
}


module.exports = {
    genInit
};
