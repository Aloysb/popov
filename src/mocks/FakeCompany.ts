/* eslint-disable import/no-extraneous-dependencies */
import faker from '@faker-js/faker';

import { Company, TCompany } from '../models/Company';

export default class FakeCompany extends Company {
  constructor() {
    super(generateFakeCompany());
  }
}

const generateFakeCompany = (): TCompany => ({
  id: faker.unique(faker.datatype.uuid),
  name: faker.company.companyName(),
  addressId: 1,
});
