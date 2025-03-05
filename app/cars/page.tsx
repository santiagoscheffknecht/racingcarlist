import './page.css';
import React from 'react';
import Car from '../lib/types/Car';
import CarCard from '../component/carCard';
import Link from 'next/link'; // Stelle sicher, dass Link importiert ist

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


            {testCars.map((car, index) => (
                <div key={index} className="w-full max-w-md p-4 border-2 border-gray-800 bg-green-500 rounded-lg shadow-lg">
                    <CarCard car={car} />
                </div>
            ))}
        </div>
    );
}
