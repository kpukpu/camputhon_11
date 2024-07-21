import React, { useState } from 'react';
import '../styles/Shop.css';
import ShopModal from '../modal/ShopModal';

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        imageUrl: "https://via.placeholder.com/150",
    },
];

const Product = ({ product, onClick }) => {
    return (
        <div className="product" onClick={() => onClick(product)}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price} 코인</p>
        </div>
    );
};

const ProductList = ({ products, onProductClick }) => {
    const productElements = products.map(product => (
        <Product key={product.id} product={product} onClick={onProductClick} />
    ));

    if (products.length % 2 !== 0) {
        productElements.push(<div key="dummy" className="product dummy"></div>);
    }

    return (
        <div className="product-list">
            {productElements}
        </div>
    );
};

const Shop = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [balance, setBalance] = useState(1000);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleModalClose = () => {
        setSelectedProduct(null);
    };

    const handlePurchase = () => {
        if (selectedProduct && balance >= selectedProduct.price) {
            setBalance(balance - selectedProduct.price);
        }
        setSelectedProduct(null);
    };

    return (
        <div className="shop">
            <div className="balance">보유 코인: {balance} 코인</div>
            <ProductList products={products} onProductClick={handleProductClick} />
            <ShopModal
                product={selectedProduct}
                onClose={handleModalClose}
                onPurchase={handlePurchase}
            />
        </div>
    );
};

export default Shop;
