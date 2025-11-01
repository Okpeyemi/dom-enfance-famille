import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import ScaleIn from "./animations/ScaleIn";
import AnimatedLink from "./animations/AnimatedLink";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <FadeIn direction="right" duration={0.8}>
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="text-[#E6007E]">Dom'Enfance & Famille:</span>
                  <br />
                  <span className="text-black">
                    Association solidaire (ESS) au service des familles de Guadeloupe
                  </span>
                </h1>
                
                <p className="text-black text-lg md:text-2xl mb-4">
                  Micro-crèches <span className="text-[#E6007E]">|</span> Garde à domicile <span className="text-[#E6007E]">|</span> Ateliers parentalité
                </p>
                
                <h3 className="text-black text-2xl md:text-3xl font-medium">
                  Avec vous, pour eux.
                </h3>
              </div>

              {/* Bouton CTA */}
              <AnimatedLink
                href="/nos-actions"
                className="bg-[#E6007E] text-white font-bold text-2xl rounded-full px-12 py-4 hover:bg-[#c5006b] transition-colors inline-block text-center max-w-fit"
              >
                Découvrir nos actions
              </AnimatedLink>
            </div>
          </FadeIn>

          {/* Colonne droite - Image */}
          <ScaleIn delay={0.3} duration={0.8}>
            <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] aspect-square">
              <Image
                src="/hero-acceuil.png"
                alt="Famille avec enfants dans une micro-crèche"
                fill
                className="object-cover rounded-full"
                priority
              />
              {/* Forme décorative verte */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#94C11F] rounded-full -z-10"></div>
              
              {/* Triangle décoratif à droite */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -right-16 w-0 h-0"
                style={{
                  borderLeft: "60px solid #94C11F",
                  borderTop: "40px solid transparent",
                  borderBottom: "40px solid transparent",
                }}
              ></div>
            </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
