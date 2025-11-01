export default function CartesActions() {
  const actions = [
    {
      id: 1,
      titre: "Micro-crèches solidaires",
      sousTitre: "(0-6 ans)",
      couleurTitre: "text-[#94C11F]",
      couleurPuces: "bg-[#94C11F]",
      items: [
        "Accueil collectif à taille humaine (10 enfants max)",
        "Agrément PMI",
        "Équipe éducative formée (CAP AEPE, inclusion)",
        "Ateliers d'éveil intégrés",
      ],
      boutons: [
        { texte: "Tarifs solidaires\nselon ressources", couleur: "bg-[#F6D902]", textColor: "text-black" },
        { texte: "Inscription en ligne", couleur: "bg-[#94C11F]", textColor: "text-white" },
      ],
    },
    {
      id: 2,
      titre: "Garde à domicile inclusive",
      sousTitre: "(0-18 ans)",
      couleurTitre: "text-[#1E88E5]",
      couleurPuces: "bg-[#1E88E5]",
      items: [
        "Périscolaire, mercredis, vacances, horaires atypiques",
        "Accompagnement aux activités / rendez-vous",
        "Prise en charge des enfants en situation de handicap",
      ],
      boutons: [
        { texte: "Déclaré SAP NOVA", couleur: "bg-[#F6D902]", textColor: "text-black" },
        { texte: "crédit d'impôt 50 %", couleur: "bg-[#1E88E5]", textColor: "text-white" },
      ],
    },
    {
      id: 3,
      titre: "Ateliers & Soutien à la\nparentalité",
      sousTitre: "",
      couleurTitre: "text-[#1E88E5]",
      couleurPuces: "bg-[#1E88E5]",
      items: [
        "Ateliers d'éveil (musique, motricité, créole...)",
        "Conférences : sommeil, alimentation, écran, handicap...",
        "Groupes de parole parents",
      ],
      boutons: [
        { texte: "Gratuits ou à prix\nlibre", couleur: "bg-[#F6D902]", textColor: "text-black" },
        { texte: "Voir le calendrier", couleur: "bg-[#1E88E5]", textColor: "text-white" },
      ],
    },
    {
      id: 4,
      titre: "Micro-crèches solidaires",
      sousTitre: "(0-6 ans)",
      couleurTitre: "text-[#94C11F]",
      couleurPuces: "bg-[#94C11F]",
      items: [
        "Accueil collectif à taille humaine (10 enfants max)",
        "Agrément PMI",
        "Équipe éducative formée (CAP AEPE, inclusion)",
        "Ateliers d'éveil intégrés",
      ],
      boutons: [
        { texte: "Tarifs solidaires\nselon ressources", couleur: "bg-[#F6D902]", textColor: "text-black" },
        { texte: "Inscription en ligne", couleur: "bg-[#94C11F]", textColor: "text-white" },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto">
        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {actions.map((action) => (
            <div
              key={action.id}
              className={`flex flex-col justify-between border-gray-200 p-8 ${
                action.id === 1 ? '' : action.id === 2 ? 'border-l' : action.id === 3 ? 'border-t' : 'border-l border-t'
              }`}
            >
              {/* Titre */}
              <div>
                <h3 className={`text-2xl md:text-3xl font-bold ${action.couleurTitre} mb-2`}>
                {action.titre}
              </h3>
              {action.sousTitre && (
                <p className={`text-xl md:text-2xl font-bold ${action.couleurTitre} mb-6`}>
                  {action.sousTitre}
                </p>
              )}
              </div>

              {/* Liste des items */}
              <ul className="space-y-4 mb-8">
                {action.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-6 h-6 ${action.couleurPuces} rounded-full`}></span>
                    <span className="text-black text-2xl leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                {action.boutons.map((bouton, index) => (
                  <div
                    key={index}
                    className={`${bouton.couleur} ${bouton.textColor} flex w-full h-[70px] justify-center items-center px-6 py-3 text-center font-bold text-lg whitespace-pre-line`}
                    style={{
                      clipPath: index === 0 
                        ? "polygon(0% 20%, 50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%)" 
                        : "polygon(0% 20%, 50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%)",
                    }}
                  >
                    {bouton.texte}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
