import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProducts() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setimage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !description || !category || !price || !image) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        const productData = { name, description, category, price, image };
        console.log(productData);

        try {
            const response = await axios.post('http://localhost:3000/api/v1/products', productData);
            setSuccess('Product added successfully!');
            navigate('/products');
        } catch (err) {
            setError('Failed to add product. Please try again.');
            console.log(err);
        } finally {
            setLoading(false);
            setName('');
            setDescription('');
            setCategory('');
            setPrice('');
            setimage('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800 text-black">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Add New Product</h2>

                {/* Success or Error Message */}
                {success && <div className="text-green-500 text-center mb-4">{success}</div>}
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="block text-gray-700">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter product description"
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category" className="block text-gray-700">Category</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Enter product category"
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price" className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter product price"
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="image" className="block text-gray-700">Image URL</label>
                        <input
                            type="url"
                            id="image"
                            value={image}
                            onChange={(e) => setimage(e.target.value)}
                            placeholder="Enter product image URL"
                            required
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        {loading ? 'Adding...' : 'Add Product'}
                    </button>
                </form>
            </div>
        </div>
    );
}
