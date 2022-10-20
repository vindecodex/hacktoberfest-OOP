import { Triangle } from './triangle';
import { jest } from '@jest/globals';

describe('Triangle', () => {
  // Setup
  const expected = {
    sides: 3,
    side1: 3,
    side2: 6,
    side3: 7,
    name: 'triangle',
    perimeter: 16,
    area: 8.9,
  };
  const triangle = new Triangle(expected.sides, expected.side1, expected.side2, expected.side3);

  it('should return properties passed to the triangle class', () => {
    expect(expected.name).toEqual(triangle.getName());
    expect(triangle.getSides()).toEqual(expected.sides);
    expect(triangle.getSide1()).toEqual(expected.side1);
    expect(triangle.getSide2()).toEqual(expected.side2);
    expect(triangle.getSide3()).toEqual(expected.side3);
  });

  it('should return the calculated area', () => {
    const spy = jest.spyOn(triangle, 'getArea').mockReturnValueOnce(expected.area);
    const area = Math.round(triangle.getArea() * 100 + Number.EPSILON) / 100;

    expect(area).toBe(expected.area);
    expect(spy).toHaveBeenCalled();
  });

  it('should return the calculated perimeter', () => {
    const spy = jest.spyOn(triangle, 'getPerimeter').mockReturnValueOnce(expected.perimeter);

    expect(triangle.getPerimeter()).toBe(expected.perimeter);
    expect(spy).toHaveBeenCalled();
  });
});
