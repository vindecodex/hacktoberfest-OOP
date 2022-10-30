import { Car } from "../../../base/car/car";

export class Mazda extends Car {
    constructor(speed: number, color: string) {
        super("Mazda", speed, color);
    }
}
