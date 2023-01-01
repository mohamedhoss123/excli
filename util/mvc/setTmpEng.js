const fs = require("fs-extra")
const path = require("path")
const { raedConFile } = require("../configFile/ConfigFile")
function setTempEngine(projectPath,name){
    const lang = raedConFile(projectPath).lang
    let mainPath = `main.${lang}`
    if (lang == "ts"){
        mainPath = "src/"+mainPath
    }
    let mainFileContent = fs.readFileSync(path.join(projectPath,mainPath)).toString()
    mainFileContent = mainFileContent.replace("const app = express()",`const app = express()\napp.set("view engine","${name}")
    `)
    console.log(mainFileContent);
    fs.writeFileSync(path.join(projectPath,mainPath),mainFileContent)
}

module.exports = {
    setTempEngine
};
