'use client';
import { ProductContext } from '@/context/productContext';
import { ProductType } from '@/types/datatype';
import React, { useContext } from 'react';

const MyPlan = () => {
    const { Addplan } = useContext(ProductContext) as { Addplan: ProductType[] };

    return (
        <div className='container mx-auto'>
            <h1>MY PLAN</h1>
            <div className="container mx-auto flex justify-between items-center gap-4 mt-6">

    <div>
        <h2 className="font-bold">Exercises</h2>
        <p className="text-2xl font-bold text-shadow-green-400">{Addplan.length}</p>
    </div>

    <div>
        <h2 className="font-bold">Minutes</h2>
        <p className="text-2xl font-bold">
            {Addplan.reduce((total, item) => total + item.duration, 0)}
        </p>
    </div>

    <div>
        <h2 className="font-bold">Calories</h2>
        <p className="text-2xl font-bold">
            {Addplan.reduce((total, item) => total + item.caloriesBurned, 0)}
        </p>
    </div>
    </div>
        </div>


    );
};

export default MyPlan;