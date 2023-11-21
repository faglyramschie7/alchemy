import inquirer from "inquirer";
import chalk from "chalk";
import config from "./config.ts"
import { check_data_type } from "./utils/checkDataTypes.ts";
import { alchemyChapters } from "./utils/spellBook.ts";
import yargs from "yargs";
// YARGS LISTENER
//

const argv = yargs()
  .command(
    'make <name> [-c] [-m]',
    'Create something',
    (yargs) => {
      yargs
        .positional('name', {
          describe: 'Name of the thing',
          type: 'string',
        })
        .option('c', {
          alias: 'controllers',
          describe: 'Create controllers',
          type: 'boolean',
        })
        .option('m', {
          alias: 'models',
          describe: 'Create models',
          type: 'boolean',
        });
    },
    (argv) => {
      const name = argv.name;

      if (argv.controllers) {
        console.log("yargs controller casted")
      }

      if (argv.models) {
        console.log("yargs models casted")
      }

      // Perform additional actions based on the provided options
    }
  )
  .help()
  .alias('help', 'h')
  .parse()



// INQUIRER BEGIN
function runInquirer(){
// begin
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
      choices: ["models", "api",  "controllers", "seeders"],
      default: ["models"],
    },
    {
      type: "checkbox",
      name: "apiActions",
      message: "🧪 Select the API Actions",
      choices: ["get", "put", "post", "delete"],
      default: ["get"],
      when: (answers) => answers.type.includes("api")
    },
    {
      name: "outdirApi",
      message: "🧪 Where do you want to save the API?",
      when: (answers) => answers.type.includes("api"),
      default: (answers) => {return `${config.entryPoint}api/${answers.name}`}
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
      message: "🫘 Where do you want to save the seeders?",
      when: (answers) => answers.type.includes("seeders"),
      default: (answers) => {return `${config.entryPoint}seeders/${answers.name.toLowerCase()}`}
    },
  ])
  .then((answers) => {
    console.log("returned answers", answers);

    for(let key in answers){
      let data_type = check_data_type(answers[key])
      console.log("alchemy key: ", key)
      console.log("alchemy chapter: ", alchemyChapters[key])
      if(alchemyChapters[key]){
        console.log(alchemyChapters[key].magic())
        console.log("-----------------------")
      } else {
        console.log("-----------------------")
      }
    }
  });

}


console.log("yargs keys", Object.keys(argv))
if(process.argv.length <= 2 && Object.keys(argv).length <= 1){
  runInquirer()
}
