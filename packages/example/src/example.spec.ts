import { each } from 'lodash';
import { example } from './example';

const mockedInvalidInputs = {
  undefined: undefined,
  null: null,
  zero: 0,
  number: 1234,
  emptyString: '',
  object: {},
  array: [],
};

const mockedValidInputs = {
  sentence: 'My string',
};

describe('Given example function', () => {
  describe('When provided with a valid, truthy string input', () => {
    each(mockedValidInputs, input => {
      it(`Then it should return ${input}`, () => {
        expect(example(input)).toBe('My string');
      });
    })
  });

  describe('When provided with invalid or falsy input', () => {
    each(mockedInvalidInputs, input => {
      it(`Then it should return an empty string for ${input}`, () => {
        expect(example(input as any)).toBe('');
      });
    })
  });

  describe('When provided with a string number as an input', () => {
      it(`Then it should return an input value intact`, () => {
        expect(example('123.45')).toBe('123.45');
        expect(example('123,45')).toBe('123,45');
        expect(example('123 45')).toBe('123 45');
      });
    })
  
});
