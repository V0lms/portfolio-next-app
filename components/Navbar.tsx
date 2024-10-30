import Link from "next/link";

export default function Navbar() {

    return (
        <header className="bg-background border-b">
            <nav className="container mx-auto px-4 flex items-center justify-between py-4">
                <div className="flex lg:flex-1">
                    <Link href="/" className="text-xl font-bold">
                        Victor Olmos
                    </Link>
                </div>

                <div className="flex gap-x-8">
                    <Link href="/about" className="text-xl font-bold">
                        Sobre mi
                    </Link>
                    <Link href="/curriculum" className="text-xl font-bold">
                        Curriculum
                    </Link>
                    <Link href="/projects" className="text-xl font-bold">
                        Proyectos
                    </Link>

                </div>
            </nav>
        </header>
    );
}