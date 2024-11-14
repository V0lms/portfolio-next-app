'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {

        const pathname = usePathname()

    return (
        <header className="bg-background border-b">
            <nav className="container mx-auto px-4 flex items-center justify-between py-4">
                <div className="flex lg:flex-1">
                    <Link href="/" className="text-xl font-bold hover:text-purple-400">
                        Victor Olmos
                    </Link>
                </div>

                <div className="flex gap-x-8">
                    <Link href="/pages/about" className="text-xl font-bold hover:text-purple-400 about">
                        Sobre mi
                    </Link>
                    <Link href="/pages/curriculum" className="text-xl font-bold hover:text-purple-400 curriculum">
                        Curriculum
                    </Link>
                    <Link href="/pages/projects" className="text-xl font-bold hover:text-purple-400 projects">
                        Proyectos
                    </Link>

                </div>
            </nav>
        </header>
    );
}