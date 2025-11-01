export default function Valeurs() {
  const valeurs = [
    {
      id: 1,
      titre: "Proximité :",
      description: "Services au plus près des familles",
      color: "bg-[#E6007E]",
    },
    {
      id: 2,
      titre: "Sécurité :",
      description: "Agréments officiels (PMI, SAP NOVA)",
      color: "bg-[#0EA5E9]",
    },
    {
      id: 3,
      titre: "Confiance :",
      description: "Équipe qualifiée et transparente",
      color: "bg-[#E6007E]",
    },
    {
      id: 4,
      titre: "Inclusion :",
      description: "Tous les enfants bienvenus, avec ou sans handicap",
      color: "bg-[#0EA5E9]",
    },
    {
      id: 5,
      titre: "Solidarité :",
      description: "Modèle ESS, accessible à tous",
      color: "bg-[#E6007E]",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#E6007E] text-center mb-12">
          Nos valeurs
        </h2>

        {/* Liste des valeurs */}
        <div className="max-w-4xl mx-auto space-y-6">
          {valeurs.map((valeur) => (
            <div key={valeur.id} className="flex items-center gap-10">
              <span className={`flex-shrink-0 w-6 h-6 ${valeur.color} rounded-full`}></span>
              <p className="text-black text-xl md:text-2xl leading-relaxed">
                <span className="font-bold">{valeur.titre}</span>{" "}
                <span>{valeur.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
