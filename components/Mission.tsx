export default function Mission() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E88E5] text-center mb-12">
          Notre mission
        </h2>

        {/* Contenu */}
        <div className="mx-auto space-y-6">
          <p className="text-black text-2xl leading-relaxed">
            Nous sommes une association loi 1901 à but non lucratif, ancrée en Guadeloupe, qui agit pour l'accès à un accompagnement de qualité pour tous les enfants, de 0 à 18 ans.
          </p>

          <p className="text-black text-2xl leading-relaxed">
            Grâce à un modèle solidaire, nous rendons nos services accessibles via :
          </p>

          {/* Liste des services */}
          <ul className="space-y-3 mt-6">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-3 h-3 bg-[#1E88E5] rounded-full mt-2"></span>
              <span className="text-black text-lg">Aides CAF / CMG</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-3 h-3 bg-[#1E88E5] rounded-full mt-2"></span>
              <span className="text-black text-lg">Crédit d'impôt 50 % (SAP NOVA)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-3 h-3 bg-[#1E88E5] rounded-full mt-2"></span>
              <span className="text-black text-lg">Tarifs adaptés selon quotient familial</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
