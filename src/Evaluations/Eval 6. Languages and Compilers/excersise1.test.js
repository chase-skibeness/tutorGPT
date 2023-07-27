// greetUser.test.js
const greetUser = require('./excersise1');
const readline = require('readline');

jest.mock('readline');

describe('greetUser', () => {
  test('greets user correctly', () => {
    readline.createInterface.mockReturnValue({
      question: (query, callback) => callback('John'),
      close: jest.fn(),
    });

    console.log = jest.fn();

    greetUser();

    expect(console.log).toHaveBeenCalledWith('Hello, John');
  });
});
