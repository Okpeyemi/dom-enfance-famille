export default function Avantages() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#E6007E] text-center mb-12">
          Gouvernance
        </h2>

        {/* Badges */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Badge jaune */}
          <div 
            className="bg-[#F6D902] text-black px-12 py-10 font-bold text-xl md:text-2xl text-center shadow-lg w-full"
            style={{
              clipPath: "polygon(0% 20%, 50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%)",
            }}
          >
            Reconnue d'intérêt général
          </div>

          {/* Badge vert */}
          <div 
            className="bg-[#94C11F] text-white px-12 py-10 font-bold text-xl md:text-2xl text-center shadow-lg w-full"
            style={{
              clipPath: "polygon(0% 20%, 50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%)",
            }}
          >
            66 % de réduction d'impôt sur vos dons
          </div>
        </div>
      </div>
    </section>
  );
}
