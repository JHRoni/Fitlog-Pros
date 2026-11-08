import { CalendarDays, Bookmark, Clock, Flame, Star } from 'lucide-react';
import { ProductType } from '@/types/datatype';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import PlanButton from '@/workoutdetails/planbutton';

const WorkoutPage = async ({params}:{ params: Promise<{ id: string }>}) => {
const {id} = await params;
 const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const product = await res.json();
    return (
            <div className="min-h-screen bg-[#101114] px-6 py-12 text-white md:px-12">

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-2">

        {/* Workout Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-[550px] w-full rounded-xl object-cover"
          />
        </div>

        {/* Workout Information */}
        <div className="space-y-6">

          {/* Title */}
          <div>
            <h1 className="text-3xl font-extrabold uppercase md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-2 text-gray-400">
              {product.description}
            </p>
          </div>

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {product.muscleGroups.map(
              (muscle: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-[#c6ff00] px-4 py-1 text-sm font-bold text-black"
                >
                  {muscle}
                </span>
              )
            )}
          </div>

          {/* Workout Details */}
          <div className="overflow-hidden rounded-xl border border-[#292b33] bg-[#171920]">

            {[
              { label: "EQUIPMENT", value: product.equipment },
              { label: "DIFFICULTY", value: product.difficulty },
              { label: "SETS", value: product.sets },
              { label: "REPS", value: product.reps },
              { label: "DURATION", value: `${product.duration} min` },
              { label: "CALORIES", value: `${product.caloriesBurned} kcal` },
              { label: "RATING", value: product.rating },
            ].map(
              (
                item: { label: string; value: string | number },
                index: number
              ) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-[#292b33] px-5 py-4 last:border-none"
                >
                  <span className="text-xs font-bold text-gray-400">
                    {item.label}
                  </span>

                  <span className="text-sm">
                    {item.value}
                  </span>
                </div>
              )
            )}

          </div>

          {/* Instructions */}
          <div>
            <h2 className="mb-4 text-lg font-bold uppercase">
              Instructions
            </h2>

            <ol className="space-y-4 text-sm text-gray-300">
              {product.instructions.map(
                (instruction: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-gray-500">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">

            <div className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#c6ff00] px-5 py-3 font-bold text-black">
              <CalendarDays size={18} />
              <PlanButton/>
            </div>

            <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#353945] px-5 py-3 text-white">
              <Bookmark size={18} />
              Save for later
            </div>

          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 pt-3 text-sm text-gray-400 hover:text-[#c6ff00]"
          >
            <ArrowLeft size={16} />
            Back to workout library
          </Link>

        </div>
      </div>
    </div>
    );
}

export default WorkoutPage;