import { Mazda } from "./mazda";

describe('Mazda', () => {
  it('should return fields passed to the Mazda', () => {
    // Setup
    const expected = {
      name: 'Mazda',
      speed: 69,
      color: 'Aquamarine',
		}
		const car = new Mazda(expected.speed, expected.color);

		expect(expected.name).toEqual(car.getName())
		expect(expected.speed).toEqual(car.getSpeed())
		expect(expected.color).toEqual(car.getColor())
	})
});
