
import { months, years, JewishDate } from '../src/JewishDate';
import * as chai from "chai";

const expect = chai.expect;

describe('months', () => {
  it('should pair months with numbers', () => {
    expect(months.ADAR_I).to.equal(12);
    expect(months.NISSAN).to.equal(1);
  });

  it('should pair numbers with months', () => {
    expect(months[7]).to.equal('TISHREI');
    expect(months[9]).to.equal('KISLEV');
  });

  it('should work with accessors', () => {
    let jd = new JewishDate();

    jd.moladHours = 5;
    expect(jd.moladHours).to.equal(5);
  })
})
