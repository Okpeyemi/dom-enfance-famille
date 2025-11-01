"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper pour vérifier si le lien est actif
  const isActive = (path: string) => pathname === path;

  // Classes pour les liens actifs/inactifs
  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors font-medium";
    const activeClasses = "text-[#E6007E] font-bold";
    const inactiveClasses = "text-black hover:text-[#E6007E]";
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="DomEnfance & Famille"
              width={150}
              height={60}
              className="h-auto w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px]"
              priority
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-6 text-base xl:text-lg">
          <Link
            href="/"
            className={getLinkClasses("/")}
          >
            Acceuil
          </Link>
          <Link
            href="/association"
            className={getLinkClasses("/association")}
          >
            Association
          </Link>
          <Link
            href="/nos-actions"
            className={getLinkClasses("/nos-actions")}
          >
            Nos actions
          </Link>
          <Link
            href="/devenir-membre"
            className={getLinkClasses("/devenir-membre")}
          >
            Devenir membre
          </Link>
          <Link
            href="/actualites"
            className={getLinkClasses("/actualites")}
          >
            Actualités
          </Link>
          <Link
            href="/contact"
            className={getLinkClasses("/contact")}
          >
            Contact
          </Link>

            {/* Bouton Faire un don */}
            <Link
              href="/faire-un-don"
              className="bg-[#94C11F] text-white px-6 xl:px-8 py-3 rounded-full font-bold hover:bg-[#82a91b] transition-colors whitespace-nowrap"
            >
              Faire un don
            </Link>
          </nav>

          {/* Menu mobile (hamburger) */}
          <button 
            onClick={toggleMenu}
            className="xl:hidden flex flex-col gap-1.5 p-2" 
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-800 transition-all"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-gray-800"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-gray-800 transition-all"
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                href="/"
                onClick={closeMenu}
                className={`${getLinkClasses("/")} text-lg py-2`}
              >
                Acceuil
              </Link>
              <Link
                href="/association"
                onClick={closeMenu}
                className={`${getLinkClasses("/association")} text-lg py-2`}
              >
                Association
              </Link>
              <Link
                href="/nos-actions"
                onClick={closeMenu}
                className={`${getLinkClasses("/nos-actions")} text-lg py-2`}
              >
                Nos actions
              </Link>
              <Link
                href="/devenir-membre"
                onClick={closeMenu}
                className={`${getLinkClasses("/devenir-membre")} text-lg py-2`}
              >
                Devenir membre
              </Link>
              <Link
                href="/actualites"
                onClick={closeMenu}
                className={`${getLinkClasses("/actualites")} text-lg py-2`}
              >
                Actualités
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`${getLinkClasses("/contact")} text-lg py-2`}
              >
                Contact
              </Link>
              <Link
                href="/faire-un-don"
                onClick={closeMenu}
                className="bg-[#94C11F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#82a91b] transition-colors text-center mt-4"
              >
                Faire un don
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
