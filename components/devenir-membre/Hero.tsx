import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Image avec texte superposé */}
          <div className="relative w-full">
            <div className="relative w-full aspect-[2/1]">
              <Image
                src="/devenir-membre-hero.png"
                alt="Devenir membre de l'association"
                fill
                className="object-cover rounded-[100px]"
                priority
              />
              
              {/* Texte superposé - Desktop uniquement */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center">
                <div className="bg-white px-16 py-12 rounded-full shadow-lg" style={{
                  borderRadius: "100% 95% 80% 90%",
                }}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E6007E] text-center leading-tight">
                    Adhérer à<br />l'association
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Texte en dessous - Mobile uniquement */}
          <h1 className="md:hidden text-3xl sm:text-4xl font-bold text-[#E6007E] text-center leading-tight">
            Adhérer à l'association
          </h1>
        </div>
      </div>
    </section>
  );
}
