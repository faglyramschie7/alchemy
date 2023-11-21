export default class Seeder {
  private built: any;
  constructor() {
    this.built = {};
  }
  public call(callClass: any) {
    const cl_class = new callClass();
    // cl_class.run();
    return cl_class.get();
  }

  public seed(rounds: number, data: any) {
    for (let i = 0; i < rounds; i++) {
      this.built = {};
      this.traverse(data, this.built);
      console.log("completed", this.built);
    }
  }

  private traverse(data: any, built_data: any) {
    for (let key in data) {
      const curr_data_datatype = this.checkDataType(data[key]);
      if (curr_data_datatype == "Object" || curr_data_datatype == "Array") {
        console.log("Objects-Array: ", data, key, curr_data_datatype);

        // section: traversing object
        if (curr_data_datatype == "Object") {
          Object.assign(built_data, {
            [key]: {},
          });
          this.traverse(data[key], built_data[key]);
        }
        // section traversing array
        else if (curr_data_datatype == "Array") {
          console.log("we hit i: ", data[key], data[key].length);
          if (!built_data[key]) {
            Object.assign(built_data, {
              [key]: [],
            });
          }
          for (let i = 0; i < data[key].length; i++) {
            let object_entry = {};
            built_data[key] = [...built_data[key], object_entry];
            this.traverse(data[key][i], object_entry);
          }
        }
      } else {
        Object.assign(built_data, {
          [key]: data[key](),
        });
      }
    }

    console.log("check: built ", this.built);
  }

  private checkDataType(data: any) {
    return Object.prototype.toString.call(data).slice(8, -1);
  }
}
