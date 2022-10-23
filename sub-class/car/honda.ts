import { Car } from "../../base/car/car";

export class Honda extends Car {

  constructor(speed: number, color: string) {
    super('Honda', speed, color);
  }
}