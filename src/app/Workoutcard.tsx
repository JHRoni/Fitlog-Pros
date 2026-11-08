import React from 'react';
import Link from 'next/link';
import { Clock, Flame, Star } from 'lucide-react';
import { ProductType } from '@/types/datatype';
const Workoutcard = ({product}:{product: ProductType}) => {

    return (
        <div>
        <Link href={`/blogs/${product.id}`} className="block">
      <div className="overflow-hidden rounded-[22px] border border-[#292b33] bg-[#15161b] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c6ff00]">

        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="h-[245px] w-full object-cover"
          />
        </figure>

        <div className="space-y-5 p-7">

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {product.muscleGroups.map(
              (muscle: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              )
            )}
          </div>

          {/* Exercise Name */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase tracking-wide">
              {product.name}
            </h2>

            <p className="mt-1 text-base text-gray-400">
              {product.equipment}
            </p>
          </div>

          <div className="border-t border-[#292b33]" />

          {/* Exercise Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Clock size={19} />
              <span>{product.duration} min</span>
            </div>

            <div className="flex items-center gap-2">
              <Flame size={19} fill="currentColor" />
              <span>{product.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={19} />
              <span>{product.rating}</span>
            </div>
          </div>

        </div>
      </div>
    </Link>
        </div>
    );
};

export default Workoutcard;