import Seeder from "./_root/Seeder.ts";
import Auth from "./Auth.ts";
import { faker } from "@faker-js/faker";
export default class UserSeeder extends Seeder {
  constructor() {
    super();
  }

  private fakerModel() {
    return {
      name: faker.internet.displayName,
      email: faker.internet.email,
      url: faker.internet.url,
      someDeep: {
        sex: faker.person.sex,
        horoScope: {
          sign: faker.person.zodiacSign,
        },
        skels: [
          {
            some_name: faker.person.fullName,
          },
          {
            some_name: faker.person.fullName,
            deeper: {
              some_name: faker.person.firstName,
              arrayTest: [
                {jobName: faker.person.jobTitle}
              ]
            },
          },
        ],
      },
    };
  }

  public run(rounds: number) {
    // console.log({ ...this.call(Auth) });
    this.seed(rounds, { ...this.fakerModel(), ...this.call(Auth) });
  }
}
