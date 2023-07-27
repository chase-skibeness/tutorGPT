/* Practical Coding Exercise:
Please write a simple JavaScript class for a Car. The class should include the following:

Properties: make, model, and year.
A constructor method that accepts these three properties.
A method called getCarDetails that returns a string formatted as "<make> <model>, <year>". */

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarDetails() {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}
