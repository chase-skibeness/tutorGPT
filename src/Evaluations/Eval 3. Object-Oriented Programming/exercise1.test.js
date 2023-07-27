const Car = require('./exercise1'); // Replace this with your actual path to Car.js

describe('Car class', () => {
  let car;

  beforeEach(() => {
    car = new Car('Ford', 'Mustang', 1969);
  });

  test('should correctly construct car object', () => {
    expect(car.make).toEqual('Ford');
    expect(car.model).toEqual('Mustang');
    expect(car.year).toEqual(1969);
  });

  test('getCarDetails should return the correct details', () => {
    expect(car.getCarDetails()).toEqual('Ford Mustang, 1969');
  });
});
