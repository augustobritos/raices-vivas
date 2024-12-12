import React from 'react';
import { DESIGN_SYSTEM } from '@/app/lib/constants';
export default function Footer() {
    return (
        <footer className="bg-background dark:bg-background-dark py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p
                        className="text-sm"
                        style={{
                            color: DESIGN_SYSTEM.colors.secondary.light
                        }}
                    >
                        &copy; 2024 Raices Vivas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}