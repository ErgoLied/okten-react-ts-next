import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../models/ProductModel";
import {getAllProducts} from "../../services/products.api.service";
import {useStorage} from "../../customHooks/useStorage";

const StorageComponent: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [savedProducts, setSavedProducts] = useStorage<IProduct>('savedProducts', []);

    useEffect(() => {
        getAllProducts().then(value => setProducts([...value.products]));
    }, []);

    const saveProduct = (product: IProduct) => {
        setSavedProducts([...savedProducts, product]);
    };

    return (
        <div>
            <h2>Task #3: Store value in the browser's LocalStorage</h2>
            {
                !!products && products.map(product => <div key={product.id}>
                    {product.id} - {product.title} - {product.price}
                    <button onClick={() => saveProduct(product)}>save</button>
                </div>)
            }
        </div>
    );
};

export default StorageComponent;