import React from 'react';

export const ProductSearch = ({ onSearchChange }) => {
    return (
        <div className="mb-4">
            <label className="text-lg font-semibold mr-4" htmlFor="search">
                Search Products:
            </label>
            <input
                id="search"
                type="text"
                placeholder="Search for products..."
                className="border border-gray-300 rounded-md p-2"
                onChange={onSearchChange}
            />
        </div>
    );
};

export const CategoryFilter = ({ category, onCategoryChange }) => {
    return (
        <div className="mb-4">
            <label className="text-lg font-semibold mr-4" htmlFor="category">
                Filter by Category:
            </label>
            <select
                id="category"
                value={category}
                onChange={onCategoryChange}
                className="border border-gray-300 rounded-md p-2"
            >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothes">Clothes</option>
                <option value="home">Home</option>
            </select>
        </div>
    );
};

export const ProductCard = ({ product, onProductClick }) => {
    return (
        <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden text-black">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex justify-between">
                <div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.description.substr(0, 20) + "..."}</p>
                    <p className="text-xl font-bold text-gray-900">${product.price}</p>
                </div>
                <button
                    onClick={() => onProductClick(product)}
                    className="mt-4 px-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export const Pagination = ({ page, totalPages, onPageChange, onLimitChange, limit }) => {
    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex items-center space-x-4">
                <span className="text-lg">Show:</span>
                <select
                    value={limit}
                    onChange={onLimitChange}
                    className="border border-gray-300 rounded-md p-2"
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
                <span className="text-lg">products per page</span>
            </div>

            <div className="flex items-center space-x-4">
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page <= 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                >
                    Previous
                </button>
                <span className="text-lg">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page >= totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export const LoadingState = () => {
    return (
        <div className="text-center text-xl font-semibold py-10">
            Loading products...
        </div>
    );
};

export const ErrorState = ({ error }) => {
    return (
        <div className="text-center text-xl text-red-500 py-10">
            Error: {error}
        </div>
    );
};