import { Toyota } from "./toyota";

describe('Toyota', () => {
  it('should return fields passed to the Toyota', () => {
    // Setup
    const expected = {
      name: 'Toyota',
      speed: 15,
      color: 'white',
		}
		const car = new Toyota(expected.speed, expected.color);

		expect(expected.name).toEqual(car.getName())
		expect(expected.speed).toEqual(car.getSpeed())
		expect(expected.color).toEqual(car.getColor())
	})
})
