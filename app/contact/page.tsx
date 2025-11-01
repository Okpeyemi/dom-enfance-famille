import Hero from "@/components/contact/Hero";
import WavyLine from "@/components/WavyLine";
import FAQ from "@/components/contact/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Dom'Enfance & Famille pour toute demande d'information, devis ou inscription. Nous sommes à votre écoute en Guadeloupe.",
};

export default function Contact() {
  return (
    <div className="bg-white">
      <Hero />
      <WavyLine />
      <FAQ />
    </div>
  );
}
