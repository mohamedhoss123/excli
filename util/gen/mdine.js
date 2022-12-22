const fs = require("fs");
const path = require("path");
function writeContent (name,content,place) {
    let theArray = name.split("/")
    let FileName = theArray.pop()
    let DirectoryName = theArray.join("/")
    let FilePth = path.join(process.cwd(),place,DirectoryName,FileName+".controller.js")
    if (!fs.existsSync(path.join(process.cwd(),place,DirectoryName))){
        fs.mkdirSync(path.join(process.cwd(),place,DirectoryName), { recursive: true });
    }
    fs.writeFileSync(FilePth,content,{
        flag:"a"
    })
    console.log("create !");
}

module.exports = {
    writeContent
};
