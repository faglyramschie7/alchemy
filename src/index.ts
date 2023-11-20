import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.whiteBright.bold("🪄  What are we building?"));
inquirer
  .prompt([
    {
      name: "name",
      message: "✨ Give a name to what you are generating (e.g. Users)",
    },
    {
      type: "checkbox",
      name: "type",
      message: "⚗️ What do you want to generate? Select all that applies",
      choices: ["models", "controllers", "seeders"],
      default: ["models"],
    },
  ])
  .then((answers) => {
    console.log("returned answers", answers);
  });
