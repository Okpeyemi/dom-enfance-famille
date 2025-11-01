import type { Metadata } from "next";
import { Margarine, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingProvider from "@/components/LoadingProvider";

const margarine = Margarine({
  weight: "400",
  variable: "--font-margarine",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dom'Enfance & Famille - Association solidaire au service des familles de Guadeloupe",
  description: "Association solidaire (ESS) proposant des micro-crèches, garde à domicile et ateliers parentalité en Guadeloupe. Avec vous, pour eux.",
  keywords: ["micro-crèche", "garde enfants", "Guadeloupe", "association", "ESS", "parentalité", "famille", "bénévolat"],
  authors: [{ name: "Dom'Enfance & Famille" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://domenfancefamille.fr",
    siteName: "Dom'Enfance & Famille",
    title: "Dom'Enfance & Famille - Association solidaire au service des familles de Guadeloupe",
    description: "Association solidaire (ESS) proposant des micro-crèches, garde à domicile et ateliers parentalité en Guadeloupe.",
    images: [
      {
        url: "/hero-acceuil.png",
        width: 1200,
        height: 630,
        alt: "Dom'Enfance & Famille - Famille avec enfants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dom'Enfance & Famille",
    description: "Association solidaire au service des familles de Guadeloupe",
    images: ["/hero-acceuil.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${margarine.variable} ${montserrat.variable} font-montserrat antialiased min-h-screen flex flex-col`}
      >
        <LoadingProvider>
          <Header />
          <main className="flex-grow pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
