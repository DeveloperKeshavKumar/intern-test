import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-full flex justify-center space-x-4 bg-white p-4 shadow-md">
            <Button text={'Login'} currentPage={location.pathname} />
            <Button text={'Register'} currentPage={location.pathname} />
            <Button text={'Products'} currentPage={location.pathname} />
            <Button text={'Add Products'} currentPage={location.pathname} />
        </nav>
    );
}

function Button({ text, currentPage }) {
    const buttonRoute = `/${text.split(' ').join('').toLowerCase()}`;

    return (
        <Link to={buttonRoute}>
            <button
                className={`border px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white hover:border-white transition duration-300
                     ${currentPage === buttonRoute ? 'bg-blue-500 text-white font-semibold' : ''}`}
            >
                {text}
            </button>
        </Link>
    );
}
