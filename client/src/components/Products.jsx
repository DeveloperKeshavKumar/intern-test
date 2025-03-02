import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { ProductSearch, CategoryFilter, ProductCard, Pagination, LoadingState, ErrorState } from './ProductUtils';
import Card from './Card';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [category, setCategory] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `http://localhost:3000/api/v1/products?page=${page}&limit=${limit}&category=${category}&query=${searchQuery}`
            );
            const data = await response.json();

            if (response.ok) {
                setProducts(data.products);
                setTotalPages(data.pagination.totalPages);
                setTotalProducts(data.pagination.totalProducts);
            } else {
                setError(data.message || 'Failed to fetch products');
            }
        } catch (error) {
            setError('An error occurred while fetching the products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [page, limit, category, searchQuery]);

    const handleSearchChange = debounce((event) => {
        setSearchQuery(event.target.value);
        setPage(1);
        setProducts([]);
    }, 500);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setPage(1);
        setProducts([]);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (event) => {
        setLimit(Number(event.target.value));
        setPage(1);
        setProducts([]);
    };

    const handleScroll = () => {
        const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
        if (bottom && !loading && page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, page, totalPages]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closeCard = () => {
        setSelectedProduct(null);
    };

    if (loading && page === 1) {
        return <LoadingState />;
    }

    if (error) {
        return <ErrorState error={error} />;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-row justify-evenly">
                <ProductSearch onSearchChange={handleSearchChange} />
                <CategoryFilter category={category} onCategoryChange={handleCategoryChange} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        onProductClick={handleProductClick}
                    />
                ))}
            </div>

            {selectedProduct && <Card product={selectedProduct} closeCard={closeCard} />}

            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onLimitChange={handleLimitChange}
                limit={limit}
            />
        </div>
    );
}
