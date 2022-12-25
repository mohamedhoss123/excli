const chalk = require('chalk');
const fs = require("fs");
const path = require("path");
const { raedConFile } = require('../configFile/ConfigFile');
function writeContent (name,content,place,type) {
    let lang = raedConFile(process.cwd()).lang
    if(lang == "ts"){
        place = "src/"+place
    }
    let theArray = name.split("/")
    let FileName = theArray.pop()
    let DirectoryName = theArray.join("/")

    let FilePth = path.join(process.cwd(),place,DirectoryName,FileName+`.${type}.${lang}`)
    if (!fs.existsSync(path.join(process.cwd(),place,DirectoryName))){
        fs.mkdirSync(path.join(process.cwd(),place,DirectoryName), { recursive: true });
    }
    fs.writeFileSync(FilePth,content,{
        flag:"w"
    })
    console.log(chalk.green(`CREATED `)+FilePth.replace(process.cwd(),""));
}

module.exports = {
    writeContent
};
