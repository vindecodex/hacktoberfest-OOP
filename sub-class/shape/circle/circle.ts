import { Shape } from "../../../base/shape/shape";

export class Circle extends Shape {
    private pi: number = 3.1416;
    private radius: number;
    constructor(radius: number) {
        super(0,0,0,'circle');
        this.radius = radius;
    }

    getPI() {
        return this.pi;
    }

    getArea() {
        return this.pi * (this.radius * this.radius);
    }
}