"use client";

import { useState } from "react";
import Link from "next/link";

export default function ActionsPhares() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const actions = [
    {
      id: 1,
      title: "Micro-crèches (0-6 ans)",
      subtitle: "Garde à domicile (0-18 ans)",
      subtitle2: "Ateliers & Parentalité",
      subtitle3: "Accueil collectif (max 10 enfants)",
    },
    {
      id: 2,
      title: "Agrément PMI",
      subtitle: "Périscolaire, week-ends, horaires atypiques",
    },
    {
      id: 3,
      title: "Inclusion handicap",
      subtitle: "Éveil, conférences, soutien aux parents",
      subtitle2: "En savoir +",
      subtitle3: "En savoir +",
      subtitle4: "En savoir +",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6007E] mb-2">
            Nos 3 actions phares
          </h2>
          <p className="text-2xl md:text-3xl text-[#E6007E] italic">
            (3 cartes cliquables)
          </p>
        </div>

        {/* Liste des actions */}
        <div className="space-y-6 mb-12">
          {/* Action 1 */}
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-4 h-4 bg-[#E6007E] rounded-full mt-2"></span>
            <p className="text-black text-2xl leading-relaxed space-x-1">
              <span className="font-semibold">Micro-crèches (0-6 ans)</span>
              <span>Garde à domicile (0-18 ans)</span>
              <span>Ateliers & Parentalité</span>
              <span>Accueil collectif (max 10 enfants)</span>
            </p>
          </div>

          {/* Action 2 */}
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-4 h-4 bg-[#E6007E] rounded-full mt-2"></span>
            <p className="text-black text-2xl leading-relaxed space-x-1">
              <span className="font-semibold">Agrément PMI</span>
              <span>Périscolaire, week-ends, horaires atypiques</span>
            </p>
          </div>

          {/* Action 3 */}
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-4 h-4 bg-[#E6007E] rounded-full mt-2"></span>
            <p className="text-black text-2xl leading-relaxed space-x-1">
              <span className="font-semibold">Inclusion handicap</span>
              <span>Éveil, conférences, soutien aux parents</span>
              <span>En savoir +</span>
              <span>En savoir +</span>
              <span>En savoir +</span>
            </p>
          </div>
        </div>

        {/* Bouton En savoir + */}
        <div className="text-center">
          <Link
            href="/nos-actions"
            className="inline-block bg-white text-black px-8 py-4 font-bold text-xl hover:bg-gray-100 transition-colors"
          >
            En savoir +
          </Link>
        </div>
      </div>
    </section>
  );
}
