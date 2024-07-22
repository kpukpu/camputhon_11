import React, { useState, useEffect } from 'react';
import '../styles/Shop.css';
import ShopModal from '../modal/ShopModal';

const Product = ({ product, onClick }) => {
    return (
        <div className="product" onClick={() => onClick(product)}>
            <img src={product.image_url} alt={product.name} className="product-image" />
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
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [balance, setBalance] = useState(1000);

    useEffect(() => {
        // Fetch product data from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/banner_list/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array means this effect runs once on mount

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
