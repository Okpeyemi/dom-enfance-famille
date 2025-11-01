import Link from "next/link";

export default function FaireUnDon() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#94C11F] text-center mb-12">
          Faire un don
        </h2>

        {/* Contenu */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Description */}
          <p className="text-black text-xl md:text-2xl italic leading-relaxed">
            Chaque don compte !
          </p>
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            50 € = 1 atelier pour 10 enfants
          </p>
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            100 € = 5h de garde à domicile pour une famille en difficulté
          </p>

          {/* Bouton */}
          <div className="mt-12">
            <Link
              href="https://www.helloasso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E6007E] text-white px-12 py-4 rounded-full font-bold text-2xl hover:bg-[#c5006b] transition-colors"
            >
              Adhérer en ligne (HelloAsso)
            </Link>
          </div>

          {/* Note fiscale */}
          <p className="text-black text-sm md:text-2xl italic mt-6">
            Reçu fiscal automatique
          </p>
        </div>
      </div>
    </section>
  );
}
