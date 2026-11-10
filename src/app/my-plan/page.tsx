'use client';
import { ProductContext } from '@/context/productContext';
import { ProductType } from '@/types/datatype';
import React, { useContext } from 'react';
import Tabs from './tabs';

const MyPlan = () => {
    const { Addplan } = useContext(ProductContext) as { Addplan: ProductType[] };

    return (
        <div className='container mx-auto gap-10 py-10 px-4 md:px-0'>
            <h1 className="text-3xl font-bold">MY PLAN</h1>
            <div className="flex justify-between items-center gap-4 mt-6 bg-gray-800 p-4 rounded-xl text-white">

    <div>
        <h2 className="font-bold">Exercises</h2>
        <p className="text-2xl font-bold text-lime-500">{Addplan.length}</p>
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
    <div className='mt-8'><Tabs/></div>
        </div>


    );
};

export default MyPlan;