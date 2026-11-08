import React, { createContext, useState } from 'react';

const ProductContext = createContext({});

const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [Addplan,setAddplan] = useState([]);
    const [Savedplan,setSavedplan] = useState([]);

    const contextValue = {
        Addplan,
        setAddplan,
        Savedplan,
        setSavedplan
    };
    return (
        <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
    );
};

export default ProductContextProvider