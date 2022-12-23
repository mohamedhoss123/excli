const { generateController } = require("./controller");
const { generatemiddleware } = require("./middleware");
const { generateModel } = require("./model");
const { generateRoute } = require("./router");

let ActionsToTake = {
    "c":generateController,
    "mi":generatemiddleware,
    "mo": generateModel,
    "r":generateRoute
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
