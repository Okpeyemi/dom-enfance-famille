import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E6007E] leading-tight mb-6">
              Nos Actions
            </h1>
            
            {/* Puces grises */}
            <div className="flex gap-3 flex-wrap">
              <span className="w-12 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-12 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-12 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-12 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-12 h-3 bg-gray-400 rounded-full"></span>
              <span className="w-12 h-3 bg-gray-400 rounded-full"></span>
            </div>
          </div>

          {/* Colonne droite - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] aspect-square">
              <Image
                src="/nos-actions-hero.png"
                alt="Famille avec enfants - Nos actions"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
