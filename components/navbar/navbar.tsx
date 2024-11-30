"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { DESIGN_SYSTEM } from '@/app/lib/constants';

export function Navbar() {
    return (
        <nav className="bg-background dark:bg-background-dark py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="/">
                    <h1
                        className="text-2xl font-bold"
                        style={{
                            fontFamily: DESIGN_SYSTEM.typography.fontFamily.secondary,
                            color: DESIGN_SYSTEM.colors.primary.light
                        }}
                    >
                        Raices Vivas
                    </h1>
                </a>
                <div className="flex items-center space-x-4">
                    <Button variant="link">Explorar</Button>
                    <Button variant="link">Nosotros</Button>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}