import React from 'react';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800 text-w">
            <div className="text-center animate-fadeIn">
                <h1 className="text-6xl font-bold text-red-600 mb-4 animate-bounce">404</h1>
                <p className="text-2xl text-gray-300 mb-4">Oops! The page you're looking for doesn't exist.</p>
                <p className="text-lg text-gray-100 mb-6">Try checking the URL or go back to the homepage.</p>
                <a
                    href="/"
                    className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Go to Homepage
                </a>
            </div>
        </div>
    );
}
