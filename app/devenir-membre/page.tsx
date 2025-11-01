import Hero from "@/components/devenir-membre/Hero";
import Line from "@/components/Line";
import PourquoiAdherer from "@/components/devenir-membre/PourquoiAdherer";
import Gouvernance from "@/components/devenir-membre/Gouvernance";
import FaireUnDon from "@/components/devenir-membre/FaireUnDon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenir membre",
  description: "Rejoignez Dom'Enfance & Famille ! Adhérez à notre association, devenez bénévole ou faites un don pour soutenir les familles de Guadeloupe.",
};

export default function DevenirMembre() {
  return (
    <div className="bg-white">
      <Hero />
      <Line />
      <PourquoiAdherer />
      <Line />
      <Gouvernance />
      <Line />
      <FaireUnDon />
    </div>
  );
}
