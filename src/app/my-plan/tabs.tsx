'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { ProductContext } from '@/context/productContext';
import { ProductType } from '@/types/datatype';

const Tabs = () => {
    const { Addplan, setAddplan, Savedplan, setSavedplan } = useContext(ProductContext);
    const [active, setActive] = useState<'plan' | 'saved'>('plan');

    const list: ProductType[] = active === 'plan' ? Addplan : Savedplan;

    const removeItem = (id: number) => {
        if (active === 'plan') {
            setAddplan((prev) => prev.filter((item) => item.id !== id));
        } else {
            setSavedplan((prev) => prev.filter((item) => item.id !== id));
        }
    };

    return (
        <div className="w-full mb-5">
            <div role="tablist" className="tabs tabs-box mb-5">
                <button
                    role="tab"
                    className={`tab ${active === 'plan' ? 'tab-active' : ''}`}
                    onClick={() => setActive('plan')}
                >
                    Today&apos;s Plan
                </button>
                <button
                    role="tab"
                    className={`tab ${active === 'saved' ? 'tab-active' : ''}`}
                    onClick={() => setActive('saved')}
                >
                    Saved
                </button>
            </div>

            {list.length === 0 ? (
                <p className="text-center text-gray-400 py-10">
                    {active === 'plan' ? 'No exercises added yet.' : 'No saved exercises yet.'}
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {list.map((item, index) => (
                        <div
                            key={`${active}-${item.id}-${index}`}
                            className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-700 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-16 object-cover rounded-lg"
                                />
                                <div>
                                    <h2 className="font-bold uppercase">{item.name}</h2>
                                    <p className="text-sm text-gray-400">
                                        {item.difficulty} | {item.equipment}
                                    </p>
                                    <div className="flex gap-3 text-xs mt-2">
                                        <span className="text-lime-400">◷ {item.duration} min</span>
                                        <span className="text-lime-400">🔥 {item.caloriesBurned} kcal</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                <Link
                                    href={`/workout/${item.id}`}
                                    className="btn btn-sm btn-outline rounded-full"
                                >
                                    View Details
                                </Link>

                                {active === 'plan' && (
                                    <button className="btn btn-sm bg-lime-400 text-black border-none rounded-full">
                                        ✓ Mark as Done
                                    </button>
                                )}

                                <button onClick={() => removeItem(item.id)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Tabs;