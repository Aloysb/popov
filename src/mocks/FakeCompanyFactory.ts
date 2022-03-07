/* eslint-disable class-methods-use-this */
import FakeCompany from './FakeCompany';

export default class FakeCompanyFactory {
  generateFakeCompanies(count: number): FakeCompany[] {
    return new Array(count).fill(0).map(() => new FakeCompany());
  }
}
