const Employee = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {
  it('should throw an error if no all arg', async () => {
    const cases = [
      { firstName: 'first' },
      { firstName: 'first', lastName: 'last' },
    ];
    for (let { firstName, lastName, department } of cases) {
      const emp = new Employee({ firstName, lastName, department });

      emp.validateSync((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if "name" is not a string', () => {
    const cases = [
      { firstName: {}, lastName: [], department: 'TestTest' },
      { firstName: 'TestTest', lastName: {}, department: [] },
      { firstName: [], lastName: 'TestTest', department: {} },
    ];
    for (let { firstName, lastName, department } of cases) {
      const emp = new Employee({ firstName, lastName, department });

      emp.validateSync((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should not throw an error if "name" is okay', () => {
    const cases = [
      { firstName: 'John', lastName: 'Dog', department: 'TestTest' },
    ];
    for (let { firstName, lastName, department } of cases) {
      const emp = new Employee({ firstName, lastName, department });

      emp.validateSync((err) => {
        expect(err.errors.name).to.exist;
      });
    }
  });
  after(() => {
    mongoose.models = {};
  });
});
