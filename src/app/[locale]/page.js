import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations();

    return (
        <section className="flex flex-col items-center justify-center h-[80vh] px-4">
            <h2 className="text-3xl font-bold mb-4">Bienvenue sur mon Portfolio</h2>
            <p className="text-lg mb-6 text-center max-w-xl">
                Je suis Luuxis, développeur web passionné, et voici un aperçu de mes compétences et de mes projets.
                Explorez et n’hésitez pas à me contacter pour plus d’informations !
            </p>
            <a href="/projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Voir mes projets
            </a>
        </section>
    );
}