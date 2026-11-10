import React from 'react';
import { api } from '../lib/api';
import { ProductType } from '@/types/datatype';
import Workoutcard from './Workoutcard';


const Workout =({ products }: { products: ProductType[] }) => {
    return (
        <div className="px-4 py-8 sm:px-6 lg:px-8 container mx-auto">
            <h1 className="text-3xl font-bold">Workout Library</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
    {products.map((product) => (
        <Workoutcard key={product.id} product={product} />
    ))}
</div>
        </div>
    );
};

export default Workout;