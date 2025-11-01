import Hero from "@/components/Hero";
import Line from "@/components/Line";
import Mission from "@/components/Mission";
import ActionsPhares from "@/components/ActionsPhares";
import Partenaires from "@/components/Partenaires";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Dom'Enfance & Famille - Association solidaire proposant des micro-crèches, garde à domicile et ateliers parentalité en Guadeloupe. Avec vous, pour eux.",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Line />
      <Mission />
      <Line />
      <ActionsPhares />
      <Line />
      <Partenaires />
    </div>
  );
}
