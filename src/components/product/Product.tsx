import React, {FC} from 'react';
import styles from './Product.module.css';

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const Product: FC<IProductProps> = ({
                                        id,
                                        title,
                                        description,
                                        price,
                                        discountPercentage,
                                        rating,
                                        stock,
                                        brand,
                                        category,
                                        thumbnail,
                                        images
                                    }) => {
    return (
        <div className={styles.product}>
            <h2>#{id} - {title}</h2>
            <p>{description}</p>
            <div className={styles.flex}>
                <img src={thumbnail} alt={title}/>
                <div>
                    <p className={styles.price}>{price}$</p>
                    <p className={styles.discount}>Extra {discountPercentage}% off</p>
                    <p>rating: {rating}</p>
                    <p>{stock} pieces available</p>
                    <p>brand: {brand}</p>
                    <p>category: {category}</p>
                </div>
            </div>

            <div className={styles.images}>
                {
                    images.map((image, index) => <img key={index} src={image} alt={title}/>)
                }
            </div>
        </div>
    );
}

export default Product;