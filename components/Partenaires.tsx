import Image from "next/image";
import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import ScaleIn from "./animations/ScaleIn";
import AnimatedLink from "./animations/AnimatedLink";

export default function Partenaires() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <FadeIn direction="up" duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E88E5] text-center mb-12">
            Ils nous soutiennent
          </h2>
        </FadeIn>

        {/* Logos des partenaires */}
        <ScaleIn delay={0.2} duration={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Logo 1 - Partenaire */}
          <div className="flex items-center justify-center p-4 bg-white">
            <div className="relative w-full h-32">
              <Image
                src="/partenaire-1.png"
                alt="Partenaire 1"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Logo 2 - Placeholder */}
          <div className="flex items-center justify-center p-4">
            <div className="w-32 h-32 bg-gray-300"></div>
          </div>

          {/* Logo 3 - Placeholder */}
          <div className="flex items-center justify-center p-4">
            <div className="w-32 h-32 bg-gray-300"></div>
          </div>

          {/* Logo 4 - Placeholder */}
          <div className="flex items-center justify-center p-4">
            <div className="w-32 h-32 bg-gray-300"></div>
          </div>
          </div>
        </ScaleIn>

        {/* Boutons d'action */}
        <FadeIn direction="up" delay={0.4} duration={0.6}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <AnimatedLink
              href="/devis"
              className="bg-[#E6007E] text-white px-10 py-4 rounded-full font-bold text-2xl hover:bg-[#c5006b] transition-colors"
            >
              Devis gratuit
            </AnimatedLink>
            <AnimatedLink
              href="/adherer"
              className="bg-[#1E88E5] text-white px-10 py-4 rounded-full font-bold text-2xl hover:bg-[#0284c7] transition-colors"
            >
              Adhérer / Bénévole
            </AnimatedLink>
          </div>
        </FadeIn>

        {/* Bouton don HelloAsso */}
        <FadeIn direction="up" delay={0.5} duration={0.6}>
          <div className="flex justify-center">
            <AnimatedLink
              href="https://www.helloasso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#94C11F] text-white px-10 py-4 rounded-full font-bold text-2xl hover:bg-[#82a91b] transition-colors"
            >
              Faire un don (HelloAsso)
            </AnimatedLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
