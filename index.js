#!/usr/bin/env node
const { Command } = require("commander");
const { genInit } = require("./commands/gen/gen");
const { newGen } = require("./commands/new/new");

const program = new Command();

program
  .name("exp-cli")
  .description("CLI tool to make your express project more fun")
  .version("0.1.0");

program
  .command("new")
  .description("generate new express application")
  .argument("<string>", "project name")
  .action(async (str) => {
    newGen(str);
  });

program
  .command("gen")
  .description("generate new express application")
  .argument("<type>", "project name")
  .argument("<filename>", "name of generated file")
  .action(async (type, filename) => {
    await genInit(type, filename);
  });

program.parse();
