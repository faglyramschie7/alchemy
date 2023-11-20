import fs from "fs"
export function SeederBooiler (
  gen_name: string,
  outdir: string) {
  return new Promise<boolean|string>((resolve, reject) => {

    if(gen_name && gen_name.length > 0 && outdir && outdir.length > 0){
      resolve(true)
    } else {
      reject("gen_name & outdir unspecified")
    }
  })

}
