import { Car } from "../../../base/car/car";

export class Toyota extends Car {
    constructor(speed: number, color: string) {
        super("Toyota", speed, color);
    }
}