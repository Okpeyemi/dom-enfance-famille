import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/animations";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScaleIn duration={0.6}>
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#E6007E] mb-4">404</h1>
            <div className="w-32 h-2 bg-[#1E88E5] mx-auto rounded-full"></div>
          </div>
        </ScaleIn>

        <FadeIn direction="up" delay={0.3} duration={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Page introuvable
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#E6007E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c5006b] transition-colors"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/contact"
              className="bg-[#1E88E5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1976D2] transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.5} duration={0.6}>
          <div className="mt-12 flex justify-center gap-4">
            <div className="w-16 h-16 bg-[#94C11F] rounded-full"></div>
            <div className="w-16 h-16 bg-[#E6007E] rounded-full"></div>
            <div className="w-16 h-16 bg-[#1E88E5] rounded-full"></div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
