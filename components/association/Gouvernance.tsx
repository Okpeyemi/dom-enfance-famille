import FadeIn from "../animations/FadeIn";

export default function Gouvernance() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <FadeIn direction="up" duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E88E5] text-center mb-12">
            Gouvernance
          </h2>
        </FadeIn>

        {/* Contenu */}
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            Bureau : Présidente, Trésorière, Secrétaire
          </p>
          <p className="text-black text-xl md:text-2xl leading-relaxed">
            Assemblée générale annuelle
          </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
