import Motor from "./Motor";

export default interface Car {
    brand: string;
    name: string;
    color: string;
    motor: Motor;
}
