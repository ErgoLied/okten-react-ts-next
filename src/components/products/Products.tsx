import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps} from "../product/Product";
import styles from './Products.module.css';

const Products: FC = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => setProducts(products));
    }, []);

    console.log(products);

    return (
        <div>
            <div className={styles.logoImg}>
                <img
                     src="https://logos-world.net/wp-content/uploads/2022/12/AliExpress-Logo.png"
                     alt="the best shop ever"/>
            </div>
            {
                products.map((product: IProductProps) =>
                    <Product
                        id={product.id}
                        brand={product.brand}
                        category={product.category}
                        description={product.description}
                        discountPercentage={product.discountPercentage}
                        images={product.images}
                        price={product.price}
                        rating={product.rating}
                        stock={product.stock}
                        thumbnail={product.thumbnail}
                        title={product.title}
                        key={product.id}
                    />
                )
            }
        </div>
    );
};

export default Products;