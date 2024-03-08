
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('fromEuroToDollar function', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
    expect(fromEuroToDollar(0)).toBeCloseTo(0);
    expect(fromEuroToDollar(-1)).toBeCloseTo(-1.07);
});

test('fromDollarToYen function', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(156.5);
    expect(fromDollarToYen(0)).toBeCloseTo(0);
    expect(fromDollarToYen(-1)).toBeCloseTo(-156.5);
});

test('fromYenToPound function', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.87);
    expect(fromYenToPound(0)).toBeCloseTo(0);
    expect(fromYenToPound(-1)).toBeCloseTo(-0.87);
});

