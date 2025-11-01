export default function Gouvernance() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E88E5] text-center mb-12">
          Gouvernance
        </h2>

        {/* Contenu */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            Bureau : Présidente, Trésorière, Secrétaire
          </p>
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            Assemblée générale annuelle
          </p>
        </div>
      </div>
    </section>
  );
}
