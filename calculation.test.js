// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(4);
// });

const calculation = require('./calculation');

test('testing input: 1+2', () => {
    expect(calculation('1+2')).toBe(3)
});

test('Order of operation: 2+2*3', () => {
    expect(calculation('2+2*3')).toBe(8)
});