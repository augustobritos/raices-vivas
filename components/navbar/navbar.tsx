"use client";

import { ModeToggle } from '@/components/theme/mode-toggle';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-background dark:bg-background-dark py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        Raices Vivas
                    </h1>
                </Link>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/comenzar" className="text-base">Investigación</Link>
                    <Link href="/nosotros" className="text-base">Nosotros</Link>
                    <Link href="/preguntas-frecuentes" className="text-base">Preguntas Frecuentes</Link>
                    <ModeToggle />
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl"
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-background dark:bg-background-dark px-4 py-2">
                    <div className="flex flex-col space-y-4">
                        <Link href="/comenzar" onClick={() => setIsMenuOpen(false)} className="text-base">Investigación</Link>
                        <Link href="/nosotros" onClick={() => setIsMenuOpen(false)} className="text-base">Nosotros</Link>
                        <Link href="/preguntas-frecuentes" onClick={() => setIsMenuOpen(false)} className="text-base">Preguntas Frecuentes</Link>
                        <ModeToggle />
                    </div>
                </div>
            )}
        </nav>
    );
}
