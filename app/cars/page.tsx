import React from 'react';
import Car from '../lib/types/Car';
import CarCard from '../component/carCard';

// Testdaten
const testCars: Car[] = [
    { brand: "BMW", name: "M4", color: "Blue", motor: { hp: 503, serialNumber: 101 } },
    { brand: "Audi", name: "RS7", color: "Red", motor: { hp: 591, serialNumber: 202 } },
    { brand: "Porsche", name: "911 Turbo S", color: "Silver", motor: { hp: 640, serialNumber: 303 } },
    { brand: "Lamborghini", name: "Huracán", color: "Green", motor: { hp: 631, serialNumber: 404 } },
    { brand: "Ferrari", name: "F8 Tributo", color: "Yellow", motor: { hp: 710, serialNumber: 505 } },
    { brand: "Rolls-Royce", name: "Cullinan", color: "White", motor: { hp: 563, serialNumber: 606 } }
];

export default function Page() {
    return (
        <div>
            {testCars.map((car) => (
                <CarCard car={car} />
            ))}
        </div>
    );
}
//Hallo ich würde gerne pushen