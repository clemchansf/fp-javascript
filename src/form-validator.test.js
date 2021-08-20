import { expect } from 'chai';
import { getErrorMessage, inputCriteria } from './form-validator';

describe('Form Field Validation - basic functionality', () => {
  it('gets error messages for a incomplete form data', () => {
    const currentInputValues = {
      firstName: '', // Must be at least 2 characters
      lastName: '', // Must be at least 2 characters
      zipCode: '', // Must be exactly 5 characters
      state: '' // Must be exactly 2 characters
    };

    const expected = [
      'First name must be at least 2 characters',
      'Last name must be at least 2 characters',
      'Zip code must be exactly 5 characters',
      'State must be exactly 2 characters'
    ];

    const actual = getErrorMessage(currentInputValues, inputCriteria);
    expect(actual).to.deep.equal(expected);
  });
  it('gets error messages for a partially completed form data', () => {
    const partialInputValues = {
      firstName: 'Good', // Must be at least 2 characters
      lastName: 'Morning', // Must be at least 2 characters
      zipCode: '', // Must be exactly 5 characters
      state: '' // Must be exactly 2 characters
    };

    const expected = [
      'Zip code must be exactly 5 characters',
      'State must be exactly 2 characters'
    ];
    const actual = getErrorMessage(partialInputValues);
    expect(actual).to.deep.equal(expected);
  });
  it('gets error messages for a completed form data');
});
