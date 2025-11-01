import Link from "next/link";
import FadeIn from "../animations/FadeIn";
import AnimatedLink from "../animations/AnimatedLink";

export default function PourquoiAdherer() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <FadeIn direction="up" duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E88E5] text-center mb-12">
            Pourquoi adhérer ?
          </h2>
        </FadeIn>

        {/* Contenu */}
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Raisons */}
          <p className="text-black text-xl md:text-2xl font-bold leading-relaxed">
            Participer aux décisions (AG)
          </p>
          <p className="text-black text-xl md:text-2xl font-bold leading-relaxed">
            Soutenir un projet local et solidaire
          </p>
          <p className="text-black text-xl md:text-2xl font-bold leading-relaxed">
            Bénéficier d'informations prioritaires
          </p>

          {/* Cotisation */}
          <div className="mt-8 space-y-2">
            <p className="text-black text-xl md:text-2xl leading-relaxed">
              Cotisation annuelle :
            </p>
            <p className="text-black text-xl md:text-2xl leading-relaxed">
              Particulier : 15 €
            </p>
            <p className="text-black text-xl md:text-2xl leading-relaxed">
              Famille : 25 €
            </p>
            <p className="text-black text-xl md:text-2xl leading-relaxed">
              Entreprise / Institution : 100 €
            </p>
          </div>

          {/* Bouton */}
          <div className="mt-12">
            <AnimatedLink
              href="https://www.helloasso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#94C11F] text-white px-12 py-4 rounded-full font-bold text-2xl hover:bg-[#82a91b] transition-colors"
            >
              Adhérer en ligne (HelloAsso)
            </AnimatedLink>
          </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
