import Seeder from "./_root/Seeder.ts";
import { faker } from "@faker-js/faker";

export default class Auth extends Seeder {
  constructor() {
    super();
  }
  public run() {
    console.log("Auth Ran");
  }
  private fakerModel() {
    return {
      token: faker.string.uuid,
    };
  }
  public get() {
    return this.fakerModel();
  }
}
