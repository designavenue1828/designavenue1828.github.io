import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const BASE = import.meta.env.BASE_URL;

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <img src={`${BASE}assets/logo.png`} alt="1828 Design Avenue" className="logo-img" />
                        <div className="logo-text-group">
                            <span className="logo-number">1828</span>
                            <span className="logo-name">DESIGN AVENUE</span>
                        </div>
                    </Link>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="menu-icon"></span>
                        <span className="menu-icon"></span>
                        <span className="menu-icon"></span>
                    </button>

                    <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-list">
                            <li>
                                <Link
                                    to="/"
                                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/reels"
                                    className={`nav-link ${isActive('/reels') ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Reels
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
