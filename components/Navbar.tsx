import Link from "next/link";

export default function Navbar() {

    return (
        <header className="bg-background border-b">
            <nav className="container mx-auto px-4 flex items-center justify-between py-4">
                <div className="flex lg:flex-1">
                    <Link href="/" className="text-xl font-bold hover:text-purple-400">
                        Victor Olmos
                    </Link>
                </div>

                <div className="flex gap-x-8">
                    <Link href="/pages/about" className="text-xl font-bold hover:text-purple-400">
                        Sobre mi
                    </Link>
                    <Link href="/pages/curriculum" className="text-xl font-bold hover:text-purple-400">
                        Curriculum
                    </Link>
                    <Link href="/pages/projects" className="text-xl font-bold hover:text-purple-400">
                        Proyectos
                    </Link>

                </div>
            </nav>
        </header>
    );
}