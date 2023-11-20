import inquirer from "inquirer";
import chalk from "chalk";
import config from "./config.ts"

console.log(chalk.whiteBright.bold("🔮  What are we building?"));
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
    {
      name: "outdirModel",
      message: "📜 Where do you want to save the model?",
      when: (answers) => answers.type.includes("models"),
      default: (answers) => {return `${config.entryPoint}models/${answers.name}`}
    },
    {
      name: "outdirController",
      message: "🪄 Where do you want to save the controller?",
      when: (answers) => answers.type.includes("controllers"),
      default: (answers) => {return `${config.entryPoint}controllers/${answers.name.toLowerCase()}`}
    },
    {
      name: "outdirSeeders",
      message: "🫘Where do you want to save the seeders?",
      when: (answers) => answers.type.includes("seeders"),
      default: (answers) => {return `${config.entryPoint}seeders/${answers.name.toLowerCase()}`}
    },
  ])
  .then((answers) => {
    console.log("returned answers", answers);
  });
