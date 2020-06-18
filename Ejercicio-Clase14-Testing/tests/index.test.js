const {showNumbers} = require('../index');

describe('showNumber function test', () => {
    test('check lenght array', () => {
        const expectedResponse = 100;
        const arr = showNumbers();
        expect(arr.length ).toBe(expectedResponse);
    });
});