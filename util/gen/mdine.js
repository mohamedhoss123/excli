const fs = require("fs");
const path = require("path");
function writeContent (name,content,place,type) {
    let theArray = name.split("/")
    let FileName = theArray.pop()
    let DirectoryName = theArray.join("/")
    let FilePth = path.join(process.cwd(),place,DirectoryName,FileName+`.${type}.js`)
    if (!fs.existsSync(path.join(process.cwd(),place,DirectoryName))){
        fs.mkdirSync(path.join(process.cwd(),place,DirectoryName), { recursive: true });
    }
    fs.writeFileSync(FilePth,content,{
        flag:"w"
    })
    console.log("create !");
}

module.exports = {
    writeContent
};
