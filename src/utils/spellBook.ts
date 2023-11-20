// The Alchemy chapters are responsible for creating dictionaries for each actions received by the answers from the cli.
// this works by invoking the key name and running the magic function. The magic function then runs the boilerplates functions and resolves back to the caller regarding the status. Any failed attempts will be recorded here and reported back to thealchemy caller.
const alchemyChapters = {
  apiActions: {
    magic: () => {
      console.log("apiActions casted")
    }
  },
  outdirApi: {
    magic: () => {
      console.log("outdirApi casted")
    }
  },
  outdirModel: {
    magic: () => {
      console.log("outdirModel casted")
    }
  },
  outdirController: {
    magic: () => {
      console.log("outdirController casted")
    }
  },
  outdirSeeders: {
    magic: () => {
      console.log("outdirSeeders casted")
    }
  }
}

export {alchemyChapters}
