import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export function LanguageToggle() {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = (lang: any) => {
        setLanguage(lang);
        // Update the content and translations based on the selected language
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {language === 'en' ? 'EN' : 'ES'}
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => toggleLanguage('en')}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage('es')}>
                    Español
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}