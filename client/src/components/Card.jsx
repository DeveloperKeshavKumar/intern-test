import React from 'react';

export default function ({ product, closeCard }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <button
                    onClick={closeCard}
                    className="absolute top-4 right-4 text-xl text-gray-500"
                >
                    &times;
                </button>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <p className="text-lg text-gray-600">{product.description}</p>
                    <p className="text-lg text-gray-800 font-semibold">{product.category}</p>
                    <p className="text-xl font-bold text-gray-900 mt-4">${product.price}</p>
                    <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

