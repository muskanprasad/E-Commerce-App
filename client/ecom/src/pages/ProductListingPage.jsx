import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './ProductListingPage.css';

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchProducts = async () => {
        try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data.products);
        setLoading(false);
        } catch (err) {
        setError('Failed to fetch products. Please ensure your backend is running.');
        setLoading(false);
        }
    };

    fetchProducts();
    }, []); 

    if (loading) return <div className="loading">Loading products...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
    <div className="product-listing-container">
        <aside className="filters-sidebar">
        <h2>Filters</h2>
        {}
        <p>Filter options will be here.</p>
        </aside>
        <main className="product-content">
        <h2>All Products</h2>
        <section className="product-grid">
            {products.map((product) => (
            <ProductCard key={product._id} product={product} />
            ))}
        </section>
        </main>
    </div>
    );
};

export default ProductListingPage;