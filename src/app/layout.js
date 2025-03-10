import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata = {
    title: "Luuxis - Portfolio",
    description: "Découvrez mes projets et mon parcours en développement web.",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://luuxis.fr",
        site_name: "Luuxis Portfolio"
    }
};

export default async function LocaleLayout({ children }) {
    return (
        <html>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
