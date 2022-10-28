import { Car } from "../../../base/car/car";

export class Nissan extends Car {
    constructor(speed: number, color: string) {
        super("Nissan", speed, color);
    }
}
