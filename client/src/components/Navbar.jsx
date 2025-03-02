import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');

    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('authToken');
        // Redirect to login page
        navigate('/login');
    };

    return (
        <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center space-x-4 bg-white p-4 shadow-md">
            {token ? (
                <>
                    <Button text={'Home'} currentPage={location.pathname} />
                    <button
                        onClick={handleLogout}
                        className="border px-4 py-2 rounded-lg text-black hover:bg-blue-500 hover:text-white hover:border-white transition duration-300"
                    >
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <Button text={'Login'} currentPage={location.pathname} />
                    <Button text={'Register'} currentPage={location.pathname} />
                </>
            )}
            <Button text={'Products'} currentPage={location.pathname} />
            <Button text={'Add Products'} currentPage={location.pathname} />
        </nav>
    );
}

function Button({ text, currentPage }) {
    const buttonRoute = `/${text.split(' ').join('').toLowerCase()}`;
    const isActive = currentPage === buttonRoute;
    return (
        <Link to={buttonRoute}>
            <button
                className={`border px-4 py-2 rounded-lg text-black hover:bg-blue-500 hover:text-white hover:border-white transition duration-300
                     ${isActive ? 'bg-blue-500 text-white font-semibold' : ''}`}
            >
                {text}
            </button>
        </Link>
    );
}
