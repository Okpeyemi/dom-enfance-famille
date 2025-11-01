"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  reponse: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Comment bénéficier du crédit d'impôt ?",
      reponse: "Pour bénéficier du crédit d'impôt de 50%, vous devez déclarer les sommes versées dans votre déclaration de revenus. Un reçu fiscal vous sera automatiquement envoyé.",
    },
    {
      id: 2,
      question: "Quels sont les agréments ?",
      reponse: "Nous disposons de l'agrément PMI pour nos micro-crèches et de l'agrément SAP NOVA pour les services à domicile.",
    },
    {
      id: 3,
      question: "Puis-je adhérer si je ne suis pas parent ?",
      reponse: "Oui, toute personne souhaitant soutenir notre projet peut adhérer à l'association, que vous soyez parent ou non.",
    },
    {
      id: 4,
      question: "Les dons sont-ils défiscalisés ?",
      reponse: "Oui, les dons sont défiscalisés à hauteur de 66% car nous sommes reconnus d'intérêt général. Vous recevrez un reçu fiscal automatiquement.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#E6007E] text-center mb-12">
          FAQ
        </h2>

        {/* Liste des questions */}
        <div className="max-w-5xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-gray-300 pb-4">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between text-left py-4 hover:text-[#E6007E] transition-colors cursor-pointer"
              >
                <span className="text-lg md:text-2xl text-black font-normal pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Réponse */}
              {openId === item.id && (
                <div className="pb-4 text-gray-700 text-lg md:text-xl leading-relaxed">
                  {item.reponse}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
