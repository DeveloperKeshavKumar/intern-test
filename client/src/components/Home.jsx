import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="max-h-[92vh] bg-gradient-to-r from-blue-700 to-gray-900 text-white">
            <div className="flex items-center justify-center h-screen text-center">
                <div>
                    <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 animate-bounce">
                        Welcome to Our Amazing Site
                    </h1>
                    <p className="text-2xl mb-6 text-gray-200 animate__animated animate__fadeIn animate__delay-2s">
                        Explore the latest trends, articles, and products. Get started now!
                    </p>
                    <Link
                        to={'/login'}
                        className="inline-block px-8 py-3 text-lg border border-gray-700 font-semibold bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-700 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105"
                    >
                        Login Here
                    </Link>
                </div>
            </div>
            <footer className="bg-gray-800 text-center text-white py-6 -my-16">
                <p className="text-sm">© 2025 All rights reserved. Created with ❤️ by <a href='mailto:keshav0kumar@hotmail.com'>Keshav Kumar</a>.</p>
            </footer>
        </div>
    );
}
