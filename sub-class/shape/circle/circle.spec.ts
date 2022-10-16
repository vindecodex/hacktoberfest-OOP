import { Circle } from "./circle";

describe('Circle', () => {
  // Setup
  const expected = {
    sides: 0,
    name: 'circle',
  };
  const radius = 5;
  const circle = new Circle(radius);

  it('should return fields passed to the circle', () => {
    expect(expected.sides).toEqual(circle.getSides());
    expect(expected.name).toEqual(circle.getName());
  });
  it('should multiple radius by it self and then multiplied by the value of PI', () => {
    expect(circle.getPI() * (radius * radius)).toBe(circle.getArea());
  });
});
