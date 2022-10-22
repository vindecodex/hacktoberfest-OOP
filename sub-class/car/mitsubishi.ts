import { Car } from '../../base/car/car';

export class Mitsubishi extends Car {

  constructor(speed: number, color: string) {
    super('Mitsubishi', speed, color);
  }
}
