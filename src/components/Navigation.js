'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#features', label: 'Funzionalità' },
        { href: '#benefits', label: 'Vantaggi' },
        { href: '#pricing', label: 'Prezzi' },
        { href: '#stats', label: 'Numeri' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] border-b border-slate-100'
                        : 'bg-transparent border-b border-transparent'
                }`}
            >
                <div className="mx-auto max-w-6xl">
                    <div
                        className={`flex items-center justify-between px-4 md:px-6 lg:px-0 transition-all duration-300 ${
                            scrolled ? 'h-14' : 'h-20'
                        }`}
                    >
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2">
              <span
                  className={`text-2xl font-semibold tracking-tight transition-colors duration-300 text-black`}
              >
                Waly
              </span>
                        </a>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex flex-1 items-center justify-center">
                            <div className="flex items-center gap-10">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors duration-300 text-black`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center justify-end flex-1 gap-3">
                            {/* Accedi: solo testo, niente contorno / sfondo, shadow on hover */}
                            <a
                                href="#pricing"
                                className="inline-flex items-center px-4 py-2 text-sm rounded-full font-semibold text-slate-900 transition-all duration-300 hover:shadow-md hover:-translate-y-px"
                            >
                                Accedi
                            </a>

                            {/* Registrati: bottone blu con shadow, shadow più forte on hover */}
                            <a
                                href="#pricing"
                                className={`inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 ${
                                    scrolled
                                        ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB] hover:shadow-lg hover:-translate-y-px'
                                        : 'bg-[#3B82F6] text-white hover:bg-[#2563EB] hover:shadow-lg hover:-translate-y-px'
                                }`}
                            >
                                Registrati
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-colors duration-300 ${
                                scrolled ? 'bg-slate-900 text-white' : 'bg-white/90 text-slate-900'
                            }`}
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/40"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Panel */}
                    <div className="fixed top-16 left-0 right-0 bg-white shadow-lg border-t border-slate-100">
                        <div className="mx-auto max-w-6xl px-4 py-6 space-y-6">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-sm font-medium text-slate-800"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>

                            <a
                                href="#pricing"
                                className="inline-flex w-full items-center justify-center rounded-full bg-[#3B82F6] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2563EB] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Inizia gratis
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}