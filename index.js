const { Command } = require("commander");
const { newGen } = require("./commands/new/new");

const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.0.1");

program
  .command("new")
  .description("generate new express application")
  .argument("<string>", "project name")
  .action(async (str) => {
    newGen(str)
  });

program
  .command("gen")
  .description("generate new express application")
  .argument("<string>", "project name")
  .action(async (str) => {
    await unzip();
    changePjName(str);
  });

program.parse();
