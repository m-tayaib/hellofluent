import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className="w-full" style={{ background: 'var(--color-primary)' }}>
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center gap-2 py-6">
                <nav className="mb-2 flex flex-wrap justify-center gap-6 text-sm">
                    <Link to="/" className="hover:underline text-logo">Home</Link>
                    <Link to="/languages" className="hover:underline text-logo">Languages</Link>
                    <Link to="/about" className="hover:underline text-logo">About</Link>

                </nav>
                <span className="text-center text-base tracking-wide text-accent">
                    &copy; {new Date().getFullYear()} HelloFluent. All rights reserved. | Developed by <a href="https://www.linkedin.com/in/m-tayaib/" target="_blank" rel="noopener noreferrer" className="hover:underline text-logo">Muhammad Tayyab</a>
                </span>
            </div>
        </footer>
    )
}

export default Footer