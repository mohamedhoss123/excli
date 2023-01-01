const { default: axios } = require("axios");

async function GPD(prompt) {
  const questions = {
    type: "text",
    name: "name",
    message: "what is packge name? :",
  };
  let result = await prompt(questions);
  try {
    let data = await axios.get(`https://registry.npmjs.org/${result.name}`);
    let versions = Object.keys(data.data.versions)
    data = {
      name: data.data.name,
      version: versions[versions.length-1],
      description: data.data.description,
    };
    console.log(`name : ${data.name}\nversion: ${data.version}\ndescription:${data.description}`);
    return data;
  } catch (err) {
    if(err.code == "ERR_BAD_REQUEST") return "packge not found on npm registery";
  }
}

module.exports = {
  GPD,
};
