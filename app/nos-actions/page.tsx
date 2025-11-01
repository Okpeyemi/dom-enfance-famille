import Hero from "@/components/nos-actions/Hero";
import CartesActions from "@/components/nos-actions/CartesActions";
import Line from "@/components/Line";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos actions",
  description: "Découvrez nos services : micro-crèches, garde à domicile, ateliers parentalité et soutien aux familles en Guadeloupe.",
};

export default function NosActions() {
  return (
    <div className="bg-white">
      <Hero />
      <CartesActions />
    </div>
  );
}
