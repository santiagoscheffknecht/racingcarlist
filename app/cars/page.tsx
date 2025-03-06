import React from 'react';
import Car from '../lib/types/Car';
import Link from 'next/link';
import CarList from '../list/list';

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
        <div className="flex flex-col items-center gap-4 p-4">

            <div className="flex gap-4">
                <Link href="/" className="text-white-500">
                    Home
                </Link>
                <Link href="/cars" className="text-white">
                    Cars
                </Link>
            </div>


            <div >
                <CarList cars={testCars} ></CarList>
            </div>
        </div>
    );
}
