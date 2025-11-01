import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import ScaleIn from "../animations/ScaleIn";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <FadeIn direction="right" duration={0.8}>
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E88E5] leading-tight mb-6">
                Qui sommes-nous ?
              </h1>
              
              <div className="space-y-4 text-black text-lg md:text-2xl leading-relaxed">
                <p>
                  Dom'Enfance & Famille est une association loi 1901 à but non lucratif, reconnue d'intérêt général (éligible aux dons défiscalisés).
                </p>
                
                <p>
                  Fondée en 2025 en Guadeloupe, elle porte un projet solidaire pour répondre aux besoins réels des familles : garde d'enfants, inclusion, soutien à la parentalité.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Colonne droite - Image */}
          <ScaleIn delay={0.3} duration={0.8}>
            <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] aspect-square">
              <Image
                src="/association-hero.png"
                alt="Équipe de Dom'Enfance & Famille avec des familles"
                fill
                className="object-cover rounded-full"
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
