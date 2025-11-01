import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="DomEnfance & Famille"
            width={200}
            height={80}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xl">
          <Link
            href="/"
            className="text-black hover:text-[#E6007E] transition-colors font-medium"
          >
            Acceuil
          </Link>
          <Link
            href="/association"
            className="text-black hover:text-[#E6007E] transition-colors font-medium"
          >
            Association
          </Link>
          <Link
            href="/nos-actions"
            className="text-black hover:text-[#E6007E] transition-colors font-medium"
          >
            Nos actions
          </Link>
          <Link
            href="/devenir-membre"
            className="text-black hover:text-[#E6007E] transition-colors font-medium"
          >
            Devenir membre
          </Link>
          <Link
            href="/actualites"
            className="text-black hover:text-[#E6007E] transition-colors font-medium"
          >
            Actualités
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-[#E6007E] transition-colors font-medium"
          >
            Contact
          </Link>

          {/* Bouton Faire un don */}
          <Link
            href="/faire-un-don"
            className="relative bg-[#94C11F] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#82a91b] transition-colors"
          >
            Faire un don
          </Link>
        </nav>

        {/* Menu mobile (hamburger) */}
        <button className="md:hidden flex flex-col gap-1.5" aria-label="Menu">
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
          <span className="w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
    </header>
  );
}
