import React from "react";


// ngetes pake footer doang (template)
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo or Brand Name */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold">Your Brand</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="/" className="hover:underline">
                        Home
                    </a>
                    <a href="/about" className="hover:underline">
                        About
                    </a>
                    <a href="/services" className="hover:underline">
                        Services
                    </a>
                    <a href="/contact" className="hover:underline">
                        Contact
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.349C0 23.406.594 24 1.325 24H12.81v-9.294H9.692v-3.622h3.119V8.413c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.505 0-1.796.716-1.796 1.765v2.312h3.592l-.468 3.622h-3.124V24h6.118C23.406 24 24 23.406 24 22.675V1.325C24 .594 23.406 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.829 9.829 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.374 4.482A13.956 13.956 0 011.671 3.149 4.917 4.917 0 003.197 9.725 4.903 4.903 0 01.96 9.315v.062a4.918 4.918 0 003.946 4.82 4.902 4.902 0 01-2.214.084 4.918 4.918 0 004.593 3.417A9.868 9.868 0 010 21.542a13.901 13.901 0 007.548 2.213c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.015-.637A10.025 10.025 0 0024 4.557z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.243 1.308 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.057 1.645-.069 4.849-.069m0-2.163C8.756 0 8.329.014 7.051.072 5.771.13 4.672.398 3.758 1.312c-.915.914-1.182 2.013-1.24 3.293-.058 1.278-.072 1.705-.072 4.895s.014 3.617.072 4.895c.058 1.28.325 2.379 1.24 3.293.914.914 2.013 1.182 3.293 1.24 1.278.058 1.705.072 4.895.072s3.617-.014 4.895-.072c1.28-.058 2.379-.326 3.293-1.24.914-.914 1.182-2.013 1.24-3.293.058-1.278.072-1.705.072-4.895s-.014-3.617-.072-4.895c-.058-1.28-.326-2.379-1.24-3.293-.914-.914-2.013-1.182-3.293-1.24-1.278-.058-1.705-.072-4.895-.072zM12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838m0-2.163A8.325 8.325 0 113.675 12 8.325 8.325 0 0112 3.675zM18.406 4.594a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-gray-400">
                &copy; 2024 Your Brand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
