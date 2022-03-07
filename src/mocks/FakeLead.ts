/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';

import { Lead, TLead } from '../models/Lead';

export default class FakeLead extends Lead {
  constructor() {
    super(generateFakeLead());
  }
}

const generateFakeLead = (): TLead => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  title: faker.name.jobTitle(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber(),
  note: faker.lorem.paragraph(),
});
