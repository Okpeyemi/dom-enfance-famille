import Hero from "@/components/association/Hero";
import Line from "@/components/Line";
import Valeurs from "@/components/association/Valeurs";
import Avantages from "@/components/association/Avantages";
import Gouvernance from "@/components/association/Gouvernance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Association",
  description: "Découvrez Dom'Enfance & Famille, association solidaire en Guadeloupe. Nos valeurs, notre mission et nos avantages pour les familles.",
};

export default function Association() {
  return (
    <div className="bg-white">
      <Hero />
      <Line />
      <Valeurs />
      <Line />
      <Gouvernance />
      <Line />
      <Avantages />
    </div>
  );
}
