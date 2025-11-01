import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Première ligne - Texte et Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Colonne gauche - Texte */}
            <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E6007E] leading-tight">
              Blog / Événements
            </h1>
            </div>

          {/* Colonne droite - Image */}
            <div className="relative hidden md:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[700px] aspect-square">
              <Image
                src="/acrualites-hero.png"
                alt="Blog et événements - Actualités"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            </div>
        </div>

        {/* Deuxième ligne - Courbe décorative */}
        <div className="relative hidden md:flex w-full h-100 -mt-80">
          <Image
            src="/vector.png"
            alt="Courbe décorative"
            fill
          />
        </div>
      </div>
    </section>
  );
}
