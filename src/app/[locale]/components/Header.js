
export default function Header() {
    return (
        <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">Luuxis Portfolio</h1>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                    <li><a href="/projects">Projets</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}