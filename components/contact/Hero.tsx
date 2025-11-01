"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import ScaleIn from "../animations/ScaleIn";

export default function Hero() {
  const [formData, setFormData] = useState({
    nom: "",
    objet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <FadeIn direction="up" duration={0.6}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E6007E] text-center mb-8">
            Contact
          </h1>
        </FadeIn>

        {/* Informations de contact */}
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="text-center mb-12 space-y-2">
            <p className="text-black text-lg md:text-xl italic">
              Adresse : [À compléter – ex : Lotissement X, 971XX Ville]
            </p>
            <p className="text-black text-lg md:text-xl">
              Téléphone : 06 XX XX XX XX
            </p>
            <p className="text-black text-lg md:text-xl">
              Email : <a href="mailto:contact@domenfancefamille.fr" className="underline">contact@domenfancefamille.fr</a>
            </p>
          </div>
        </FadeIn>

        {/* Grille formulaire et image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Formulaire */}
          <FadeIn direction="right" delay={0.3} duration={0.7}>
            <div>
            <h3 className="text-xl md:text-2xl font-normal text-black mb-6">
              Formulaire :
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 text-2xl">
              {/* Champ Nom et prénoms */}
              <div>
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom et prénoms"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-100 rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                  required
                />
              </div>

              {/* Champ Objet */}
              <div>
                <input
                  type="text"
                  name="objet"
                  placeholder="Objet (Devis / Adhésion / Don / Bénévolat / Autre)"
                  value={formData.objet}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-100 rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
                  required
                />
              </div>

              {/* Champ Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 bg-gray-100 rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5] resize-none"
                  required
                />
              </div>

              {/* Bouton Envoyer */}
              <div>
                <button
                  type="submit"
                  className="bg-[#1E88E5] text-white px-12 py-4 rounded-full font-bold text-2xl hover:bg-[#1976D2] transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </form>
            </div>
          </FadeIn>

          {/* Colonne droite - Image */}
          <ScaleIn delay={0.4} duration={0.7}>
            <div className="relative w-full h-[400px] lg:ml-auto">
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
                }}
              >
                <Image
                  src="/contact-hero1.png"
                  alt="Contact - Bureau"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
