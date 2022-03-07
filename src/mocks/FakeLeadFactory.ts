/* eslint-disable class-methods-use-this */
import FakeLead from './FakeLead';

export default class FakeLeadFactory {
  generateFakeLead(count: number): FakeLead[] {
    return new Array(count).map(() => new FakeLead());
  }
}
