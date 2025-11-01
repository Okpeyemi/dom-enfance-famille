"use client";

import { useState } from "react";

export default function Gouvernance() {
  const [formData, setFormData] = useState({
    nom: "",
    competences: "",
    disponibilite: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#E6007E] text-center mb-8">
          Gouvernance
        </h2>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-black text-lg md:text-2xl leading-relaxed">
            Aidez-nous sur : Animation d'ateliers; accompagnement administratif; communication locale;
            Événements (kermesses, portes ouvertes). Intéressé ? Remplissez le formulaire ci-dessous.
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 text-2xl">
          {/* Champ Nom et Prénoms */}
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Nom et Prénoms"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              required
            />
          </div>

          {/* Champ Compétences */}
          <div>
            <input
              type="text"
              name="competences"
              placeholder="Compétences"
              value={formData.competences}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              required
            />
          </div>

          {/* Champ Disponibilité */}
          <div>
            <input
              type="text"
              name="disponibilite"
              placeholder="Disponibilité"
              value={formData.disponibilite}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-gray-100 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E88E5]"
              required
            />
          </div>

          {/* Bouton Envoyer */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#1E88E5] text-white px-12 py-4 rounded-full font-bold text-2xl hover:bg-[#1976D2] transition-colors"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
