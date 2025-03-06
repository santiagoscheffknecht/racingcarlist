import React from 'react';
import CarCard from '../component/carCard';
import Car from '../lib/types/Car';

type props = {
    cars: Car[];
}

export default function CarList({ cars }: props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-screen-lg justify-start">
            {cars.map((car, index) => (
                <div key={index} >
                    <CarCard car={car} />
                </div>
            ))}
        </div>
    );
}
