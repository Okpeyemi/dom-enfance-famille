import Image from "next/image";
import Link from "next/link";

export default function Partenaires() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E88E5] text-center mb-12">
          Ils nous soutiennent
        </h2>

        {/* Logos des partenaires */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {/* Logo 1 - Allocations Familiales */}
          <div className="flex items-center justify-center p-4 bg-white">
            <div className="w-full h-32 bg-[#1E88E5] flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">CAF</div>
                <div className="text-xs uppercase tracking-wider">Allocations<br/>Familiales</div>
              </div>
            </div>
          </div>

          {/* Logo 2 - Placeholder */}
          <div className="flex items-center justify-center p-4">
            <div className="w-full h-32 bg-gray-300"></div>
          </div>

          {/* Logo 3 - Placeholder */}
          <div className="flex items-center justify-center p-4">
            <div className="w-full h-32 bg-gray-300"></div>
          </div>

          {/* Logo 4 - Placeholder */}
          <div className="flex items-center justify-center p-4">
            <div className="w-full h-32 bg-gray-300"></div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          <Link
            href="/devis"
            className="bg-[#E6007E] text-white px-10 py-4 rounded-full font-bold text-2xl hover:bg-[#c5006b] transition-colors"
          >
            Devis gratuit
          </Link>
          <Link
            href="/adherer"
            className="bg-[#1E88E5] text-white px-10 py-4 rounded-full font-bold text-2xl hover:bg-[#0284c7] transition-colors"
          >
            Adhérer / Bénévole
          </Link>
        </div>

        {/* Bouton don HelloAsso */}
        <div className="flex justify-center">
          <Link
            href="https://www.helloasso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#94C11F] text-white px-10 py-4 rounded-full font-bold text-2xl hover:bg-[#82a91b] transition-colors"
          >
            Faire un don (HelloAsso)
          </Link>
        </div>
      </div>
    </section>
  );
}
