async function database(prompet) {
  console.clear();
  const questions = {
    type: "list",
    name: "choseTemplate",
    message: "chose new application type :",
    choices: ["MVC", "Rest"],
  };
  let viewEngine = prompt(questions);
  viewEngine = viewEngine.viewChose;
  console.clear();
}
