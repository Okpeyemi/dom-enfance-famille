import DonInfo from "@/components/faire-un-don/DonInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faire un don",
  description: "Soutenez Dom'Enfance & Famille avec un don défiscalisé. Chaque don compte pour aider les familles de Guadeloupe. Reçu fiscal automatique.",
};

export default function FaireUnDon() {
  return (
    <div className="bg-white">
      <DonInfo />
    </div>
  );
}
