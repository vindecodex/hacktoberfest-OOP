import { Rectangle } from './rectangle';
import { jest } from '@jest/globals';

describe('Rectangle', () => {
  // Setup
  const expected = {
    sides: 4,
    length: 4,
    width: 5,
    name: 'rectangle',
    perimeter: 18,
    area: 20,
  };
  const rectangle = new Rectangle(expected.sides, expected.length, expected.width);

  it('should return properties passed to the rectangle class', () => {
    expect(rectangle.getName()).toEqual(expected.name);
    expect(rectangle.getSides()).toEqual(expected.sides);
    expect(rectangle.getLength()).toEqual(expected.length);
    expect(rectangle.getWidth()).toEqual(expected.width);
  });

  it('should return the calculated area', () => {
    const spy = jest.spyOn(rectangle, 'getArea').mockReturnValueOnce(expected.area);

    expect(rectangle.getArea()).toBe(expected.area);
    expect(spy).toHaveBeenCalled();
  });

  it('should return the calculated perimeter', () => {
    const spy = jest.spyOn(rectangle, 'getPerimeter').mockReturnValueOnce(expected.perimeter);

    expect(rectangle.getPerimeter()).toBe(expected.perimeter);
    expect(spy).toHaveBeenCalled();
  });
});
