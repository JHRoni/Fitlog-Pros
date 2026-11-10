'use client';
import React, { createContext, useState } from 'react';
import { ProductType } from '@/types/datatype';

type ContextType = {
    Addplan: ProductType[];
    setAddplan: React.Dispatch<React.SetStateAction<ProductType[]>>;
    Savedplan: ProductType[];
    setSavedplan: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

export const ProductContext = createContext<ContextType>({} as ContextType);

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [Addplan, setAddplan] = useState<ProductType[]>([]);
    const [Savedplan, setSavedplan] = useState<ProductType[]>([]);

    return (
        <ProductContext.Provider value={{ Addplan, setAddplan, Savedplan, setSavedplan }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;