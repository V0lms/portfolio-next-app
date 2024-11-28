import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <span></span>
                    
                    <p className="text-sm text-muted-foreground a">
                        2024 - 2025 Portfolio.
                    </p>

                    <div className="flex space-x-6">
                        <Link
                            href="https://github.com/V0lms"
                            className="text-muted-foreground hover:text-purple-400"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/v0lms/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-purple-400"
                        >
                            Linkedin
                        </Link>
                        <Link
                            href="mailto:victorolmosmartin@gmail.com"
                            className="text-muted-foreground hover:text-purple-400"
                        >
                            Email
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}