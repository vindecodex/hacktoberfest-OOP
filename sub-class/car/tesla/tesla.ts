import { Car } from "../../../base/car/car";

export class Tesla extends Car {
    constructor(speed: number, color: string) {
        super("Tesla", speed, color);
    }
}