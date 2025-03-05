import React from 'react'
import Car from '../lib/types/Car'

type carProps = {
    car: Car
}


export default function carCard({ car }: carProps) {
    return (
        <div>
            <h1>{car.name}</h1>
            <div>{car.brand}</div>
            <div>{car.color}</div>
            <div>{car.motor.hp}</div>
            <div>{car.motor.serialNumber}</div>
        </div>
    )
}
