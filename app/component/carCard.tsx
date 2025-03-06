"use client"
import React, { useState } from 'react'
import Car from '../lib/types/Car'

type carProps = {
    car: Car
}


export default function carCard({ car }: carProps) {

    const [isActive, setIsActive] = useState<boolean>(false)

    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={`w-[200px] p-4 border-2 border-gray-800 rounded-lg shadow-lg cursor-pointer ${isActive ? 'bg-green-500' : 'bg-fuchsia-500'
                }`}
        >
            <h1 className="text-2xl font-bold">{car.name}</h1>
            <div>{car.brand}</div>
            <div>{car.color}</div>
            <div>{car.motor.hp}</div>
            <div>{car.motor.serialNumber}</div>
            <p className="mt-2 text-white">
                Status: {isActive ? 'Active' : 'Inactive'}
            </p>
        </div>
    )
}
