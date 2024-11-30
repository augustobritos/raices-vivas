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
                        &copy; 2023 FamilyRoots. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-primary-light transition-colors"
                            style={{
                                color: DESIGN_SYSTEM.colors.secondary.light,
                                fontSize: DESIGN_SYSTEM.typography.sizes.small
                            }}
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary-light transition-colors"
                            style={{
                                color: DESIGN_SYSTEM.colors.secondary.light,
                                fontSize: DESIGN_SYSTEM.typography.sizes.small
                            }}
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}